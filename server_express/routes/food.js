const Router = require("express").Router();
const multer = require("multer");
const Products = require("../models/foodModel");
const errAsync = require("../utils/asynError")
// const review = require("../controllers/reviewcontroller");
const reviewRouter = require("./review")
const commentRouter = require("./commentRouter")



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1]
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage });
Router.use("/:product/review", reviewRouter)
Router.use("/:product/comment", commentRouter)

Router.route("/")
  .get((req, res, next) => {
    Products.find({}, (err, products) => {
      if (err) return err;
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.json({
        success: true,
        messages: "Products fetched successfully",
        foods: products
      });
    });
  })
  .post(upload.single("photo"), (req, res, next) => {
    const { name, price } = req.body;
    req.body.image = req.file.filename
    Products.create(
      {
        ...req.body
      },
      (err, product) => {
        if (err) return next(err);
        res.setHeader("conent-type", "application/json");
        res.statusCode = 201;
        res.json({
          message: "Product created successfully",
          success: true,
          food: product
        });
      }
    );
  })


Router.route("/:id")
  .patch(upload.single("photo"), errAsync(async (req, res, next) => {
    if (req.file) req.body.image = req.file.filename
    const food = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      success: true,
      food
    })
  }))
  .delete(errAsync(async (req, res, next) => {
    const product = await Products.findByIdAndDelete(req.params.id)
    res.status(204).json({
      success: true,
    })
  }))
  .get(errAsync(async (req, res, next) => {
    const product = await Products.findById(req.params.id)
      .populate({
        path: "reviews",
        select: "rating user -product"
      })
    res.status(200).json({
      success: true,
      product
    })
  })
  )


module.exports = Router;
