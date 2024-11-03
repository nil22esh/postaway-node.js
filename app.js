// importing modules
import express from "express";
import colors from "colors";
import userRouter from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";
import jwtAuth from "./middleware/jwtAuthMiddleware.js";
import commentRouter from "./routes/commentRoutes.js";
import likeRouter from "./routes/likeRoutes.js";

// creating instances
const app = express();
// configuring env in application
dotenv.config();

// parsing data from body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// creating API routes
app.use("/api/users", userRouter);
app.use("/api/posts", jwtAuth, postRouter);
app.use("/api/comments", jwtAuth, commentRouter);
app.use("/api/likes", jwtAuth, likeRouter);

// creating a server
app.listen(process.env.PORT, () => {
  console.log(
    `Postaway website server is running on port ${process.env.PORT}`.bgMagenta
  );
});
