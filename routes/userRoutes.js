import express from "express";
import UserController from "../controllers/userController.js";

const userRouter = express.Router();
const usersController = new UserController();

userRouter.get("/", usersController.getAllUsers);
userRouter.post("/signup", usersController.postSignUp);
userRouter.post("/signin", usersController.postSignIn);

export default userRouter;
