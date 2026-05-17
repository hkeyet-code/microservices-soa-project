const express = require("express");
const cors = require("cors");

require("dotenv").config();

const sequelize = require("./config/database");

const taskRoutes = require("./routes/taskRoutes");

const { connectProducer } = require("./kafka/producer");

const startOverdueChecker =
    require("./jobs/overdueChecker");

const startGrpcServer =
    require("./grpc/server");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Service Running");
});

sequelize.sync()
    .then(async () => {

        await connectProducer();

        startOverdueChecker();

        startGrpcServer();

        console.log("Task Database Connected");

        app.listen(process.env.PORT, () => {

            console.log(
                `Task Service running on port ${process.env.PORT}`
            );

        });

    })
    .catch((err) => {

        console.error(
            "Database connection error:",
            err
        );

    });