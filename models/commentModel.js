export default class CommentModel {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }
  static getAll(pId) {
    const result = comments.filter((comment) => {
      return comment.postId == pId;
    });
    return result;
  }
  static addComment(userId, postId, content) {
    const newComment = new CommentModel(
      comments.length + 1,
      userId,
      postId,
      content
    );
    comments.push(newComment);
    return newComment;
  }
  static getById(id) {
    return comments.find((comment) => comment.id === parseInt(id));
  }
  static updateComment(id, content) {
    const comment = this.getById(id);
    comment.content = content;
    return comment;
  }
  static deleteComment(id) {
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index !== -1) {
      comments.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

const comments = [
  {
    id: 1,
    userId: 1,
    postId: 1,
    content: "This is a great post!",
  },
  {
    id: 2,
    userId: 2,
    postId: 1,
    content: "I totally agree with the points made here.",
  },
  {
    id: 3,
    userId: 1,
    postId: 2,
    content: "Interesting perspective, thanks for sharing.",
  },
];
