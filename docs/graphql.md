# GraphQL API Gateway

The Smart Academic Training Platform uses GraphQL as a centralized API Gateway.

The API Gateway allows clients to access multiple microservices using a single endpoint:

http://localhost:4000/graphql

The gateway communicates internally with microservices using gRPC.

# GraphQL Communication Flow

Client → GraphQL API Gateway → gRPC → Microservices

The API Gateway receives GraphQL queries and forwards requests to:

- User Service
- Course Service
- Task Service

using gRPC communication.

# GraphQL Schema

```graphql
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
}

type Task {
  id: Int
  title: String
  status: String
}

type Query {
  users: [User]
  projects: [Project]
  tasks: [Task]
  analytics: Analytics
}
```

## Users Query

```graphql
query {
  users {
    id
    name
    email
  }
}
```

## Projects Query

```graphql
query {
  projects {
    id
    name
    description
    status
  }
}
```

## Tasks Query

```graphql
query {
  tasks {
    id
    title
    status
  }
}
```

## Analytics Query

```graphql
query {
  analytics {
    totalProjects
    totalTasks
    completedTasks
    overdueTasks
    completionRate
  }
  schema
  queries
  screenshots
}
```
