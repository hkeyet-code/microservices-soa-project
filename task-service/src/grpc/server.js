const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

const Task =
require("../models/Task");

const packageDefinition =
protoLoader.loadSync(

    path.join(
        __dirname,
        "../../../proto/task.proto"
    )

);

const taskProto =
grpc.loadPackageDefinition(
    packageDefinition
).task;

const server = new grpc.Server();

server.addService(

    taskProto.TaskService.service,

    {

        GetTasks: async (
            call,
            callback
        ) => {

            const tasks =
                await Task.findAll();

            const formattedTasks =
                tasks.map(task => ({

                    ...task.toJSON(),

                    deadline:
                        task.deadline
                        ? task.deadline.toISOString()
                        : ""

                }));

            callback(null, {
                tasks: formattedTasks
            });

        }

    }

);

const startGrpcServer = () => {

    server.bindAsync(

        "0.0.0.0:50053",

        grpc.ServerCredentials.createInsecure(),

        () => {

            console.log(
                "gRPC Task Service running on port 50053"
            );

        }

    );

};

module.exports = startGrpcServer;