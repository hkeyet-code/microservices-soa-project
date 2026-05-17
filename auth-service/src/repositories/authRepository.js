const Auth = require("../models/Auth");

const createUser = async (userData) => {

    return await Auth.create(userData);

};

const findUserByEmail = async (email) => {

    return await Auth.findOne({
        where: { email }
    });

};

module.exports = {
    createUser,
    findUserByEmail
};