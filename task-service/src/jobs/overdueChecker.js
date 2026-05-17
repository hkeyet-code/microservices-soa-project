const cron = require("node-cron");

const Task = require("../models/Task");

const {
    sendEvent
} = require("../kafka/producer");

const startOverdueChecker = () => {

    cron.schedule("* * * * *", async () => {

        console.log(
            "Checking overdue tasks..."
        );

        const tasks = await Task.findAll();

        const now = new Date();

        for (const task of tasks) {

            if (

                task.deadline &&
                new Date(task.deadline) < now &&
                task.status !== "completed"

            ) {

                console.log(
                    `OVERDUE TASK DETECTED: ${task.title}`
                );

                await sendEvent(
                    "task.overdue",
                    {
                        id: task.id,
                        title: task.title,
                        status: task.status
                    }
                );

                console.log(
                    "Kafka Event Sent: task.overdue"
                );

            }

        }

    });

};

module.exports = startOverdueChecker;