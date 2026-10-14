class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  equalsTo(user) {
    return user.id === this.id;
  }
}
// const usuario = new User(1, "Daniel", "daniel@gmail.com");
// console.log(usuario);
// console.log(usuario.getName());
// console.log(usuario.equalsTo(1));

module.exports = User;
