const kafka = require("./client");

const producer = kafka.producer();

const connectProducer = async () => {

    await producer.connect();

    console.log("Project Kafka Producer Connected");

};

const sendEvent = async (topic, message) => {

    await producer.send({

        topic,

        messages: [

            {
                value: JSON.stringify(message)
            }

        ]

    });

};

module.exports = {
    connectProducer,
    sendEvent
};