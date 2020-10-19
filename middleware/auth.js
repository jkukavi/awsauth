const basicAuth = require("express-basic-auth");
const getUsers = require("./getUsers");

module.exports = basicAuth({
  users: getUsers(),
  unauthorizedResponse: "Unauthorized, sorry.",
});
