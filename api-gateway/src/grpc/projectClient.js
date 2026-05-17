const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

const packageDefinition =
protoLoader.loadSync(

    path.join(
        __dirname,
        "../../../proto/project.proto"
    ),

    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }

);

const projectProto =
grpc.loadPackageDefinition(
    packageDefinition
).project;

const client =
new projectProto.ProjectService(

    "127.0.0.1:50052",

    grpc.credentials.createInsecure()

);

module.exports = client;