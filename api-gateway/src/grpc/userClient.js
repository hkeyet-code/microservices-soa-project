const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

const packageDefinition =
protoLoader.loadSync(

    path.join(
        __dirname,
        "../../../proto/user.proto"
    )

);

const userProto =
grpc.loadPackageDefinition(
    packageDefinition
).user;

const client =
new userProto.UserService(

    "127.0.0.1:50051",

    grpc.credentials.createInsecure()

);

module.exports = client;