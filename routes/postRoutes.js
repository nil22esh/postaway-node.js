import express from "express";
import PostController from "../controllers/postController.js";
import { upload } from "../middleware/uploadFileMiddleware.js";

const postRouter = express.Router();
const postsController = new PostController();

postRouter.get("/all", postsController.getAllPosts);
postRouter.get("/:id", postsController.getSinglePost);
postRouter.get("/", postsController.getPostByUserId);
postRouter.post("/", upload.single("imageUrl"), postsController.postNewPost);
postRouter.put("/:id", upload.single("imageUrl"), postsController.updatePost);
postRouter.delete("/:id", postsController.deletePost);

export default postRouter;
