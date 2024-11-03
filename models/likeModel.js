export default class LikeModel {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }
  static getAll() {
    return likes;
  }
  static getPostLikes(pId) {
    return likes.filter((like) => like.postId === pId);
  }
  static toggleLike(userId, postId) {
    const existingLikeIndex = likes.findIndex(
      (like) => like.userId === userId && like.postId === postId
    );
    if (existingLikeIndex !== -1) {
      likes.splice(existingLikeIndex, 1);
      return { message: "Like removed" };
    } else {
      const newLike = new LikeModel(likes.length + 1, userId, postId);
      likes.push(newLike);
      return newLike;
    }
  }
}
const likes = [
  {
    id: 1,
    userId: 1,
    postId: 1,
  },
  {
    id: 2,
    userId: 2,
    postId: 1,
  },
  {
    id: 3,
    userId: 1,
    postId: 2,
  },
];
