const { Kafka } = require("kafkajs");

const kafka = new Kafka({

    clientId: "notification-service",

    brokers: ["localhost:9092"]

});

const consumer = kafka.consumer({

    groupId: "notification-group"

});

const startConsumer = async () => {

    await consumer.connect();

    console.log("Kafka Consumer Connected");

    await consumer.subscribe({

        topic: "user.created",

        fromBeginning: true

    });

    await consumer.run({

        eachMessage: async ({ topic, partition, message }) => {

            const data = JSON.parse(
                message.value.toString()
            );

            console.log("NEW USER EVENT RECEIVED");

            console.log(data);

            console.log(
                `Notification sent to ${data.email}`
            );

        }

    });

};

module.exports = startConsumer;