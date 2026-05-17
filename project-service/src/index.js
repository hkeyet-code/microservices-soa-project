const express = require("express");

const cors = require("cors");

require("dotenv").config();

require("./models/Project");

const sequelize =
require("./config/database");

const startGrpcServer =
require("./grpc/server");

const projectRoutes =
require("./routes/projectRoutes");

const {
    connectProducer
} = require("./kafka/producer");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/projects", projectRoutes);

app.get("/", (req, res) => {

    res.send(
        "Project Service Running"
    );

});

sequelize.sync()

.then(async () => {

    await connectProducer();

    startGrpcServer();

    console.log(
        "Project Database Connected"
    );

    app.listen(
        process.env.PORT,
        () => {

            console.log(
                `Project Service running on port ${process.env.PORT}`
            );

        }
    );

})

.catch((error) => {

    console.log(error);

});