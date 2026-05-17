const grpc = require("@grpc/grpc-js");

const protoLoader =
require("@grpc/proto-loader");

const path = require("path");

const Project =
require("../models/Project");

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

const server =
new grpc.Server();

server.addService(

    projectProto.ProjectService.service,

    {

        GetProjects: async (
            call,
            callback
        ) => {

            try {

                const data =
                    await Project.findAll({
                        raw: true
                    });

                const projects =
                    data.map(project => ({

                        id: project.id,
                        name: project.name,
                        description:
                            project.description || "",
                        status:
                            project.status || ""

                    }));

                console.log(projects);

                callback(null, {
                    projects: projects
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

        "0.0.0.0:50052",

        grpc.ServerCredentials.createInsecure(),

        () => {

            console.log(
                "gRPC Project Service running on port 50052"
            );

            server.start();

        }

    );

};

module.exports = startGrpcServer;