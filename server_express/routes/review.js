const express = require("express")
const userRouter = express.Router({ mergeParams: true })
const userconstrollers = require("../controllers/reviewcontroller")
const auth = require("../controllers/authController")


userRouter.route("/")
    .get(userconstrollers.getreview)
    .post(auth.authenticate, userconstrollers.creatReview)


module.exports = userRouter
