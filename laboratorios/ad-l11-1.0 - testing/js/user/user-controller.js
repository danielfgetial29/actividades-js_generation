class UserController {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  add(user) {
    this.users.push(user);
  }

  remove(user) {
    this.users = this.users.filter(function (ele) {
      return ele != user;
    });
  }

  findByEmail(email) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email) return this.users[i];
    }
  }

  findById(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) return this.users[i];
    }
  }
}

const controlador = new UserController();

controlador.add("daniel getial");
// console.log("usuario agregado");

console.log("Lista de usuarios: ", controlador.getUsers());

module.exports = UserController;
