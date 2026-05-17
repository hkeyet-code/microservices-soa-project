const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "auth_db",
    "admin",
    "admin",
    {
        host: "localhost",
        dialect: "postgres",
        port: 5434
    }
);

module.exports = sequelize;