# gRPC Documentation

# gRPC Services

The project employs gRPC as the communication mechanism between API Gateway and backend microservices, which is a method for fast and efficient inter-service communication.

---

# User Service gRPC

## Port

```text
50051
```

## Method

```proto
rpc GetUsers (Empty) returns (UserList);
```

---

# Project Service gRPC

## Port

```text
50052
```

## Method

```proto
rpc GetProjects (Empty) returns (ProjectList);
```

---

# Task Service gRPC

## Port

```text
50053
```

## Method

```proto
rpc GetTasks (Empty) returns (TaskList);
```

---

# Proto Files

## user.proto

```proto
syntax = "proto3";

package user;

service UserService {
    rpc GetUsers (Empty) returns (UserList);
}
```

---

## project.proto

```proto
syntax = "proto3";

package project;

service ProjectService {
    rpc GetProjects (Empty) returns (ProjectList);
}
```

---

## task.proto

```proto
syntax = "proto3";

package task;

service TaskService {
    rpc GetTasks (Empty) returns (TaskList);
}
```

---

# gRPC Workflow

1. GraphQL query received.
2. API Gateway sends a gRPC request.
3. Service processes request.
4. Service returns a protobuf response.
5. Gateway aggregates data.