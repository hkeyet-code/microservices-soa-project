const userClient =
require("./grpc/userClient");

const projectClient =
require("./grpc/projectClient");

const taskClient =
require("./grpc/taskClient");

module.exports = {

    Query: {

        users: async () => {

            return new Promise(
                (resolve, reject) => {

                    userClient.GetUsers(
                        {},
                        (error, response) => {

                            if (error)
                                reject(error);

                            else
                                resolve(
                                    response.users
                                );

                        }
                    );

                }
            );

        },

projects: async () => {

    console.log("GRAPHQL PROJECT QUERY CALLED");

    return new Promise(
        (resolve, reject) => {

            projectClient.GetProjects(
                {},
                (error, response) => {

                    console.log("gRPC ERROR:", error);

                    console.log("gRPC RESPONSE:", response);

                    if (error) {

                        reject(error);

                    } else {

                        resolve(
                            response.projects
                        );

                    }

                }
            );

        }
    );

},

        tasks: async () => {

            return new Promise(
                (resolve, reject) => {

                    taskClient.GetTasks(
                        {},
                        (error, response) => {

                            if (error)
                                reject(error);

                            else
                                resolve(
                                    response.tasks
                                );

                        }
                    );

                }
            );

        },

        analytics: async () => {

            const projects =
                await new Promise(
                    (resolve, reject) => {

                        projectClient.GetProjects(
                            {},
                            (error, response) => {

                                if (error)
                                    reject(error);

                                else
                                    resolve(
                                        response.projects
                                    );

                            }
                        );

                    }
                );

            const tasks =
                await new Promise(
                    (resolve, reject) => {

                        taskClient.GetTasks(
                            {},
                            (error, response) => {

                                if (error)
                                    reject(error);

                                else
                                    resolve(
                                        response.tasks
                                    );

                            }
                        );

                    }
                );

            const completedTasks =
                tasks.filter(
                    task =>
                        task.status ===
                        "completed"
                ).length;

            const overdueTasks =
                tasks.filter(
                    task =>
                        task.status !==
                        "completed"
                ).length;

            const completionRate =
                tasks.length > 0
                    ? (
                        completedTasks /
                        tasks.length
                    ) * 100
                    : 0;

            return {

                totalProjects:
                    projects.length,

                totalTasks:
                    tasks.length,

                completedTasks,

                overdueTasks,

                completionRate

            };

        }

    },

    Project: {

        tasks: async (project) => {

            const tasks =
                await new Promise(
                    (resolve, reject) => {

                        taskClient.GetTasks(
                            {},
                            (error, response) => {

                                if (error)
                                    reject(error);

                                else
                                    resolve(
                                        response.tasks
                                    );

                            }
                        );

                    }
                );

            return tasks.filter(
                task =>
                    task.projectId ===
                    project.id
            );

        }

    }

};