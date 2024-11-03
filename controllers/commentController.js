import CommentModel from "../models/commentModel.js";

export default class CommentController {
  getAllComments(req, res) {
    const postId = req.params.id;
    const comments = CommentModel.getAll(postId);
    res.status(200).send({
      success: true,
      comments: comments,
    });
  }
  postAddComment(req, res) {
    const { userId, content } = req.body;
    const postId = req.params.id;
    if (!userId || !content || !postId) {
      return res
        .status(400)
        .send({ success: false, message: "Your comment Input Not Found!" });
    }
    const newComment = CommentModel.addComment(userId, postId, content);
    res.status(201).send({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  }
  updateComment(req, res) {
    const { id } = req.params;
    const { content } = req.body;
    const updatedComment = CommentModel.updateComment(id, content);
    if (!updatedComment) {
      res.status(404).send({
        success: false,
        message: "Your comment not found!",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Comment updated successfully",
        comment: updatedComment,
      });
    }
  }
  deleteComment(req, res) {
    const { id } = req.params;
    const isDeleted = CommentModel.deleteComment(id);
    if (!isDeleted) {
      res.status(404).send({
        success: false,
        message: "Comment not found",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Your comment deleted successfully!",
        deletedComment: isDeleted,
      });
    }
  }
}
