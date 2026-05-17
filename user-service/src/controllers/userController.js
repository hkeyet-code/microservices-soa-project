const { validationResult } = require("express-validator");

const userService = require("../services/userService");

const {
    sendEvent
} = require("../kafka/producer");

const getUsers = async (req, res) => {

    try {

        const users = await userService.getAllUsers();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

const createUser = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({
                errors: errors.array()
            });

        }

        const userData = req.body;

        const newUser = await userService.createUser(userData);

        // PRODUCE KAFKA EVENT
        await sendEvent(
            "user.created",
            {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        );

        console.log("Kafka Event Sent: user.created");

        res.status(201).json(newUser);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getUsers,
    createUser
};