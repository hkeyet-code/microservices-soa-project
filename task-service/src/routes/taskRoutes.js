const express = require("express");

const router = express.Router();

const {
    getTasks,
    createTask,
    completeTask
} = require("../controllers/taskController");

router.get("/", getTasks);

router.post("/", createTask);

router.put("/:id/complete", completeTask);

module.exports = router;