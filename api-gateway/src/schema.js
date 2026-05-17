const { gql } =
require("apollo-server-express");

module.exports = gql`

    type User {

        id: Int
        name: String
        email: String

    }

    type Project {

        id: Int
        name: String
        description: String
        status: String
        tasks: [Task]

    }

    type Task {

        id: Int
        title: String
        description: String
        status: String
        deadline: String
        assignedTo: Int
        projectId: Int

    }

    type Analytics {

        totalProjects: Int
        totalTasks: Int
        completedTasks: Int
        overdueTasks: Int
        completionRate: Float

    }

    type Query {

        users: [User]

        projects: [Project]

        tasks: [Task]

        analytics: Analytics

    }

`;