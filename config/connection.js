const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("sqlite::memory:");

module.exports = sequelize;
