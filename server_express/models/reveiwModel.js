const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productModel = require("./foodModel")

const ReviewSchema = new Schema({
  rating: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: 
    {
      type: mongoose.Schema.ObjectId,
      ref: "Products",
      required: true
    }
,
  user:
  {
    type: mongoose.Schema.ObjectId,
    ref: "RUsers",
    required: true
  }

},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

ReviewSchema.index({ user:1, product:1},{unique:true})

ReviewSchema.pre(/^find/,function(next){
  this.populate({
    path:"user",
    select:"name"
  })
  next()
})

ReviewSchema.statics.calcAverageRating=async function(product){
  const stats = await  this.aggregate([
   { $match: {product:product}},
   {
     $group:{
       _id:"$product",
       nRiting:{$sum :1},
       avgRating:{$avg:"$rating"}
     }
   }
  ])
 await productModel.findByIdAndUpdate(product,{
    avgRating: stats[0].avgRating,
    numberRating: stats[0].nRiting
  })
}
ReviewSchema.post("save",function(){
  this.constructor.calcAverageRating(this.product)

})

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;