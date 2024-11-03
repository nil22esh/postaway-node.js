import PostModel from "../models/postModel.js";

export default class PostController {
  getAllPosts(req, res) {
    const posts = PostModel.getAll();
    res.status(200).send({ success: true, posts: posts });
  }
  getSinglePost(req, res) {
    const id = req.params.id;
    const post = PostModel.getSingle(id);
    if (!post) {
      res.status(404).send({ success: false, message: "Post not found!" });
    } else {
      res.status(200).send({ success: true, post: post });
    }
  }
  getPostByUserId(req, res) {
    // console.log(req.user.userId);
    const userId = req.user.userId;
    const posts = PostModel.getPostByUser(userId);
    if (!posts) {
      res
        .status(404)
        .send({ success: false, message: "No posts found for this user!" });
    } else {
      res.status(200).send({ success: true, posts: posts });
    }
  }
  postNewPost(req, res) {
    const { userId, caption } = req.body;
    const newPost = PostModel.addPost({
      userId,
      caption,
      imageUrl: req.file.filename,
    });
    res.status(201).send({
      success: true,
      message: "Post Created Successfully!",
      post: newPost,
    });
  }
  updatePost(req, res) {
    const id = req.params.id;
    const { userId, caption } = req.body;
    const checkPost = PostModel.getSingle(id);
    const updatePost = PostModel.update({
      userId,
      caption,
      imageUrl: req.file.filename,
    });
    if (!updatePost) {
      res.status(404).send({ success: false, message: "Post not found!" });
    } else {
      res.status(200).send({
        success: true,
        message: "Post Updated Succcessfully!",
        post: updatePost,
      });
    }
  }
  deletePost(req, res) {
    const id = req.params.id;
    const checkPost = PostModel.delete(id);
    if (!checkPost) {
      res.status(404).send({ success: false, message: "Post not found!" });
    } else {
      // PostModel.deletePost(id);
      res.status(200).send({
        success: true,
        message: "Post deleted successfully!",
        post: checkPost,
      });
    }
  }
}
