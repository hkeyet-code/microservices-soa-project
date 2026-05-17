const { body } = require("express-validator");

const validateUser = [

    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email required")

];

module.exports = validateUser;