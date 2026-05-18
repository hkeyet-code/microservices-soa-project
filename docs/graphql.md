# GraphQL Documentation

# GraphQL API Gateway

The API Gateway provides a single endpoint for GraphQL to help aggregate data across multiple microservices.

---

# GraphQL Endpoint

```text
http://localhost:4000/graphql
```

---

# GraphQL Schema

## User Type

```graphql
type User {
    id: Int
    name: String
    email: String
}
```

---

## Project Type

```graphql
type Project {
    id: Int
    name: String
    description: String
    status: String
    tasks: [Task]
}
```

---

## Task Type

```graphql
type Task {
    id: Int
    title: String
    description: String
    status: String
    deadline: String
    assignedTo: Int
    projectId: Int
}
```

---

## Analytics Type

```graphql
type Analytics {
    totalProjects: Int
    totalTasks: Int
    completedTasks: Int
    overdueTasks: Int
    completionRate: Float
}
```

---

# Queries

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

---

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

---

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

---

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
}
```

---

# GraphQL Workflow

1. Client issues a GraphQL query.
2. API Gateway gets a request.
The microservices are called by Gateway via gRPC.
Aggregated data sent back to client.