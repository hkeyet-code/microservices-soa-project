const userRepository = require("../repositories/userRepository");

const getAllUsers = async () => {

    return userRepository.getUsers();

};

const createUser = async (userData) => {

    return userRepository.createUser(userData);

};

module.exports = {
    getAllUsers,
    createUser
};