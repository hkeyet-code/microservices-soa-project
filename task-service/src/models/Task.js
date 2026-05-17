const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Task = sequelize.define("Task", {

    title: {

        type: DataTypes.STRING,

        allowNull: false

    },

    description: {

        type: DataTypes.TEXT

    },

    status: {

        type: DataTypes.STRING,

        defaultValue: "pending"

    },

    deadline: {

        type: DataTypes.DATE

    },

    assignedTo: {

        type: DataTypes.INTEGER

    },

    projectId: {

        type: DataTypes.INTEGER

    }

});

module.exports = Task;