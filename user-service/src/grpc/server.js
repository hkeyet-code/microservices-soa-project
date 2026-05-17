const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

const User =
require("../models/User");

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

const server = new grpc.Server();

server.addService(

    userProto.UserService.service,

    {

        GetUsers: async (
            call,
            callback
        ) => {

            try {

                const users =
                    await User.findAll();

                const formattedUsers =
                    users.map(user => ({

                        id:
                        Number(user.id),

                        name:
                        String(user.name),

                        email:
                        String(user.email)

                    }));

                console.log(
                    formattedUsers
                );

                callback(null, {

                    users:
                    formattedUsers

                });

            } catch (error) {

                console.log(error);

                callback(error);

            }

        }

    }

);

const startGrpcServer = () => {

    server.bindAsync(

        "0.0.0.0:50051",

        grpc.ServerCredentials
        .createInsecure(),

        () => {

            console.log(
                "gRPC User Service running on port 50051"
            );

        }

    );

};

module.exports =
startGrpcServer;