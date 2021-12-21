const { User } = require("../models");

const userData = [
  {
    first_name: "Funny",
    last_name: "Guy",
    email: "funnyguy123@hotmail.com",
    password: "comedian123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
