const express = require("express")
const userRouter = express.Router({ mergeParams: true })
const userconstrollers = require("../controllers/commentCountroller")
const auth = require("../controllers/authController")


userRouter.route("/")
    .get(userconstrollers.getcomment)
    .post(auth.authenticate, userconstrollers.creatcomment)


module.exports = userRouter
