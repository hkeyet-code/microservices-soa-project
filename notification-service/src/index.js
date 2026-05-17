const express = require("express");

const cors = require("cors");

const startConsumer = require("./kafka/consumer");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Notification Service Running");

});

app.listen(5003, async () => {

    console.log(
        "Notification Service running on port 5003"
    );

    await startConsumer();

});