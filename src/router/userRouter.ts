import express from "express"

export const userRouter = express.Router()

userRouter.post ("/signup", userController.signup())