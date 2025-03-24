import express from "express";
import { UserController } from "../controller/user.controller";

export const userRouter = express.Router();

userRouter.post("/register", UserController.registerUserHandler);
userRouter.post("/login", UserController.loginUserHandler);