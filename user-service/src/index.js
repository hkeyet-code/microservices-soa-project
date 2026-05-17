require("dotenv").config();

const express = require("express");

const sequelize =
require("./config/db");

const userRoutes =
require("./routes/userRoutes");

const {
    connectProducer
} = require("./kafka/producer");

const startGrpcServer =
require("./grpc/server");

require("./models/User");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

sequelize.sync()
.then(async () => {

    await connectProducer();

    startGrpcServer();

    console.log(
        "Database connected"
    );

    app.listen(
        process.env.PORT,
        () => {

            console.log(
                `User Service running on port ${process.env.PORT}`
            );

        }
    );

})
.catch(error => {

    console.log(error);

});