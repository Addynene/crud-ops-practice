// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const USERS = [
  {
    id: 1,
    name: "John Doe",
    surname: "Doe",
    username: "JOhnny",
    email: "JOhn@gmail.com",
    password: "password1",
    age: "19",
  },
  {
    id: 2,
    name: "Jane Doe",
    surname: "Doe",
    username: "Jane",
    email: "Jane@gmail.com",
    password: "password2",
    age: "15",
  },
];

const ALL_USERS = [
  ...USERS,
  {
    id: 3,
    name: "Tommy",
    surname: "uhuhio",
    username: "Tom",
    email: "tommy@gmail.com",
    password: "password3",
    age: "14",
  },
  {
    id: 4,
    name: "Timmy",
    surname: "guhi",
    username: "tim",
    email: "timmy@gmail.com",
    password: "password4",
    age: "12",
  },
];

module.exports = [
  {
    id: "get-users", // route id
    url: "/api/users", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: USERS, // body to send
        },
      },
      {
        id: "all", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_USERS, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-user", // route id
    url: "/api/users/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: USERS[0], // body to send
        },
      },
      {
        id: "id-3", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_USERS[2], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id;
            const user = USERS.find((userData) => userData.id === Number(userId));
            if (user) {
              res.status(200);
              res.send(user);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      },
    ],
  },
];
