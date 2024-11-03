import express from "express";
import LikeController from "../controllers/likeController.js";

const likeRouter = express.Router();
const likesController = new LikeController();

likeRouter.get("/", likesController.getAllLikes);
likeRouter.get("/:id", likesController.getAllPostLikes);
likeRouter.get("/toggle/:id", likesController.toggleLikeStatus);

export default likeRouter;
