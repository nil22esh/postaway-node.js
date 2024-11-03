export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getAll() {
    return users;
  }
  static signUp(user) {
    const created = new UserModel(
      users.length + 1,
      user.name,
      user.email,
      user.password
    );
    users.push(created);
    return created;
  }
  static signIn(email, password) {
    const checkUser = users.find((u) => {
      return u.email == email && u.password == password;
    });
    return checkUser;
  }
}

var users = [
  {
    id: 1,
    name: "Nilesh",
    email: "nilesh@123.com",
    password: "1234",
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@123.com",
    password: "123456",
  },
];
