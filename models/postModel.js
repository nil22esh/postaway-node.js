export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
  static getAll() {
    return posts;
  }
  static addPost(userId, caption, imageUrl) {
    const newPost = new PostModel(posts.length + 1, userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }
  static getSingle(id) {
    const post = posts.find((p) => {
      return p.id == id;
    });
    return post;
  }
  static getPostByUser(userId) {
    const userPosts = posts.filter((post) => post.userId == userId);
    return userPosts;
  }
  static update(postObj) {
    const index = posts.findIndex((p) => p.id == postObj.id);
    return (posts[index] = postObj);
  }
  static delete(id) {
    const index = posts.findIndex((post) => post.id === parseInt(id));
    if (index !== -1) {
      posts.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

const posts = [
  {
    id: 1,
    userId: 1,
    caption: "A beautiful sunset over the ocean",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UC2a8MUVODCrg8rwOQ_iW7-OE8ja1ghqhg&s",
  },
  {
    id: 2,
    userId: 2,
    caption: "Just tried out this amazing pasta recipe!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1vtN0iUJYANW6QtlmSJ2rorODpjOM4mRdQ&s",
  },
  {
    id: 3,
    userId: 1,
    caption: "Hiking adventures in the mountains.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7MCQNTdqbYnBf5nC1kWiCxlUPC_5rltzqg&s",
  },
];
