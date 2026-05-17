const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const authRepository = require("../repositories/authRepository");

const register = async (userData) => {

    const existingUser = await authRepository.findUserByEmail(
        userData.email
    );

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(
        userData.password,
        10
    );

    const newUser = await authRepository.createUser({
        ...userData,
        password: hashedPassword
    });

    return {
        message: "User registered",
        user: {
            id: newUser.id,
            email: newUser.email
        }
    };

};

const login = async (userData) => {

    const user = await authRepository.findUserByEmail(
        userData.email
    );

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(
        userData.password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        "secretkey",
        {
            expiresIn: "1h"
        }
    );

    return {
        message: "Login successful",
        token
    };

};

module.exports = {
    register,
    login
};