const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

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

const client =
new taskProto.TaskService(

    "127.0.0.1:50053",

    grpc.credentials.createInsecure()

);

module.exports = client;