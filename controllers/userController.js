import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export default class UserController {
  getAllUsers(req, res) {
    const users = UserModel.getAll();
    res.status(200).send({
      success: true,
      users: users,
    });
  }
  postSignUp(req, res) {
    const { name, email, password } = req.body;
    const user = { name, email, password };
    const newUser = UserModel.signUp(user);
    res.status(201).send({
      success: true,
      message: "User Registered Successfully!",
      user: newUser,
    });
  }
  postSignIn(req, res) {
    const { email, password } = req.body;
    const isUser = UserModel.signIn(email, password);
    // console.log(isUser);
    if (!isUser) {
      res.status(401).send({
        success: false,
        message: "Invalid Email or Password!",
      });
    } else {
      const token = jwt.sign(
        { userId: isUser.id, email: isUser.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1d",
        }
      );
      res.status(200).send({
        success: true,
        message: "User Logged In Successfully!",
        user: isUser,
        jwtToken: token,
      });
    }
  }
}
