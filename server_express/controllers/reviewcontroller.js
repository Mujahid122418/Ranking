
const reveiwModel = require("../models/reveiwModel")
const errCatch = require("../utils/asynError")
const ErrorClass = require("../utils/errClass")
const config = require("../config")



exports.getreview = errCatch(async (req, res) => {
    const review = await reveiwModel.find()
    res.status(200).json(review)
})

exports.creatReview = errCatch(async (req, res) => {
    console.log(req.params.product)
    console.log(req.user)
    if (!req.body.user) req.body.user = req.user
    if (!req.body.product) req.body.product = req.params.product
    const review = await reveiwModel.create(req.body)
    res.status(200).json(review)
})

exports.deleteaAll = errCatch(async (req, res) => {
    const query = reveiwModel.deleteMany()
    const review = await query
    res.status(204).json({
        success: true,
        data: null
    })
})

// exports.updatereview = errCatch(async (req, res, next) => {
//     if (req.body.password) return next(new ErrorClass("you cannot update passord", 401))
//     const review = await reveiwModel.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     })
//     res.status(200).json({
//         success: true,
//         review
//     })
// })

