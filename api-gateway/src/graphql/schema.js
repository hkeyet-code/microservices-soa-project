const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {

        id: Int
        name: String
        email: String

    }

    type Query {

        users: [User]

    }

`;

module.exports = typeDefs;