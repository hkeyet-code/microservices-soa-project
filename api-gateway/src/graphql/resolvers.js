const userClient = require("../grpc/userClient");

const resolvers = {

    Query: {

        users: async () => {

            return new Promise((resolve, reject) => {

                userClient.GetUsers(
                    {},
                    (error, response) => {

                        if (error) {

                            reject(error);

                        } else {

                            resolve(response.users);

                        }

                    }
                );

            });

        }

    }

};

module.exports = resolvers;