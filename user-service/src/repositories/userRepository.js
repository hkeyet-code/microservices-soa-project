const User = require("../models/User");

const getUsers = async () => {

    return await User.findAll();

};

const createUser = async (userData) => {

    return await User.create(userData);

};

module.exports = {
    getUsers,
    createUser
};