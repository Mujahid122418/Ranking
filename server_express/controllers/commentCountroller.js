
const commentModel = require("../models/commentModel")
const errCatch = require("../utils/asynError")




exports.getcomment = errCatch(async (req, res) => {
    const comment = await commentModel.find()
    res.status(200).json(comment)
})

exports.creatcomment = errCatch(async (req, res) => {
    if (!req.body.user) req.body.user = req.user._id
    if (!req.body.product) req.body.product = req.params.product
    console.log(req.body)
    const comment = await commentModel.create(req.body)
    res.status(201).json(comment)
})

exports.deleteaAll = errCatch(async (req, res) => {
    const query = commentModel.deleteMany()
    const review = await query
    res.status(204).json({
        success: true,
        data: null
    })
})


