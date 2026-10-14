const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

// Tarea 2
// Agregar un usuario nuevo con add()
test("Agregar un usuario que no existe con add()", () => {
  let user = new User(1, "Daniel", "daniel@gmail.com");

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

// remove()
test("remove() no debe modificar la lista si el usuario no existe", () => {
  // La lisa comienza vacia
  userController.getUsers().length = 0;

  let user1 = new User(1, "Felipe", "felipe@gmail.com");

  let user2 = new User(2, "Santiago", "santiago@gmail.com");

  userController.add(user1);

  userController.remove(user2);

  expect(userController.getUsers()).toEqual([user1]);
});
