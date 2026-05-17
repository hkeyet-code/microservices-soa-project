const express = require("express");

const sequelize = require("./config/db");

require("./models/Auth");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

sequelize.sync()
.then(() => {
    console.log("Auth Database connected");
});

app.get("/", (req, res) => {
    res.send("Auth Service Running");
});

app.listen(5005, () => {
    console.log("Auth Service running on port 5005");
});