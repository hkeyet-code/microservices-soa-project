const express = require("express");

const router = express.Router();

const userClient = require("../grpc/userClient");

router.get("/", (req, res) => {

    userClient.GetUsers({}, (error, response) => {

        if (error) {

            return res.status(500).json(error);

        }

        res.json(response);

    });

});

module.exports = router;