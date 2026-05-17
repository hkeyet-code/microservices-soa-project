const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "user_db",
  "admin",
  "admin",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5433
  }
);

module.exports = sequelize;