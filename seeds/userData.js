const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    username: "John Smith",
    password: bcrypt.hashSync("passwordjohn", 10),
  },
  {
    username: "Sara Johnson",
    password: bcrypt.hashSync("passwordsarah", 10),
  },
  {
    username: "Mike Davis",
    password: bcrypt.hashSync("passwordmike", 10),
  },
  {
    username: "Emily Fuller",
    password: bcrypt.hashSync("passwordemily", 10),
  },
  {
    username: "David Wilson",
    password: bcrypt.hashSync("passworddavid", 10),
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
