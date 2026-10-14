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

// remove(): Eliminar un dato que no existe en la lista
test("remove() no debe modificar la lista si el usuario no existe", () => {
  // La lisa comienza vacia
  userController.getUsers().length = 0;

  let user1 = new User(1, "Felipe", "felipe@gmail.com");

  let user2 = new User(2, "Santiago", "santiago@gmail.com");

  userController.add(user1);

  userController.remove(user2);

  expect(userController.getUsers()).toEqual([user1]);
});

// findByEmail(): Correo existente

test("findByEmail() debe retornar el usuario con correo existente", () => {
  let user = new User(1, "Daniel", "daniel@gmail.com");

  userController.add(user);

  expect(userController.findByEmail("daniel@gmail.com")).toEqual(user);
});

// findByEmail(): Correo inexistente

test("findByEmail() debe retornar undefined si el correo no existe", () => {
  let user = new User(1, "Daniel", "daniel@gmail.com");

  userController.add(user);

  expect(userController.findByEmail("otro@gmail.com")).toBeUndefined();
});

// findById: ID existente

test("findById() debe retornar el usuario con ID 1", () => {
  userController.getUsers().length = 0;
  let user = new User(1, "Daniel", "daniel@gmail.com");

  userController.add(user);

  expect(userController.findById(1)).toEqual(user);
});

// 6. findById(): ID inexistente

test("findById() debe retornar undefined si el ID no existe", () => {
  let user = new User(1, "Daniel", "daniel@gmail.com");

  userController.add(user);

  expect(userController.findById(99)).toBeUndefined();
});
