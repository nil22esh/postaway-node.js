import express from "express";
import CommentController from "../controllers/commentController.js";

const commentRouter = express.Router();
const commentsController = new CommentController();

commentRouter.get("/:id", commentsController.getAllComments);
commentRouter.post("/:id", commentsController.postAddComment);
commentRouter.put("/:id", commentsController.updateComment);
commentRouter.delete("/:id", commentsController.deleteComment);

export default commentRouter;
