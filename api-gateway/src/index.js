const express = require("express");

const cors = require("cors");

const { ApolloServer } =
require("apollo-server-express");

const schema =
require("./schema");

const resolvers =
require("./resolvers");

const app = express();

app.use(cors());

const startServer = async () => {

    const server =
    new ApolloServer({

        typeDefs: schema,

        resolvers

    });

    await server.start();

    server.applyMiddleware({

        app,
        path: "/graphql"

    });

    app.get("/", (req, res) => {

        res.send(
            "API Gateway Running"
        );

    });

    app.listen(4000, () => {

        console.log(
            "API Gateway running on port 4000"
        );

        console.log(
            "GraphQL available at /graphql"
        );

    });

};

startServer();