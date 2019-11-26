const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productModel = require("./foodModel")


const CommentSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  name: {
    type: String,
    
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

CommentSchema.index({ user:1, product:1},{unique:true})

CommentSchema.pre(/^find/,function(next){
  this.populate({
    path:"user",
    select:"name"
  })
  next()
})

CommentSchema.statics.comment=async function(product){
  productModel.findById(product.product, function (err, doc) {
    console.log(doc)
      if (err)  return 
      doc.comment.push({massage:product.message,user:product.name});
      doc.save(function(err, product){
        console.log(product)
      });
    });
}
CommentSchema.post("save",function(){
  this.constructor.comment(this)

})

const commentSchema = mongoose.model("Comment", CommentSchema);
module.exports = commentSchema;



