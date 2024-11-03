import LikeModel from "../models/likeModel.js";

export default class LikeController {
  getAllLikes(req, res) {
    const likes = LikeModel.getAll();
    res.status(200).send({ success: true, likes: likes });
  }
  getAllPostLikes(req, res) {
    const postId = parseInt(req.params.id);
    if (!postId) {
      return res.status(400).send({ error: "Post ID is required!" });
    }
    const postLikes = LikeModel.getPostLikes(postId);
    res.status(200).send({ success: true, postLikes: postLikes });
  }

  toggleLikeStatus(req, res) {
    const { userId } = req.body;
    const postId = parseInt(req.params.id);
    if (!userId || !postId) {
      return res
        .status(400)
        .send({ success: false, error: "User ID and Post ID are required" });
    }
    const result = LikeModel.toggleLike(userId, postId);
    res.status(200).send({
      success: true,
      message: "Like status toggled successfully",
      result: result,
    });
  }
}
