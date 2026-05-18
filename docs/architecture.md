# System Architecture

The architecture of the Smart Academic Training Platform.

It's a distributed microservices project that is implemented with numerous communication technologies such as REST, GraphQL, gRPC and Kafka.

---

# Architecture Overview

The system consists of a collection of independent microservices, which communicate with each other via:

- REST APIs
- GraphQL API Gateway
- gRPC
- Kafka Event Streaming

Each service has:
- Independent business logic
- Independent PostgreSQL database
- Dedicated REST endpoints
- Dedicated gRPC server

---

# Main Components

## API Gateway

### Responsibilities
- Centralized entry point
- Handles GraphQL requests
- Collects information from various services.
- Communicates with services using gRPC communication

### Port
- GraphQL Port: 4000

---

## User Service

### Responsibilities
- User management
- User creation
- User retrieval

### Technologies
- Express.js
- PostgreSQL
- Sequelize
- gRPC

### Ports
- REST: 5001
- gRPC: 50051

---

## Project Service

### Responsibilities
- Project management
- Project creation
- Project retrieval
- Kafka event publishing

### Technologies
- Express.js
- PostgreSQL
- Sequelize
- Kafka Producer
- gRPC

### Ports
- REST: 5002
- gRPC: 50052

---

## Task Service

### Responsibilities
- Task management
- Task creation
- Task retrieval
- Kafka event publishing

### Technologies
- Express.js
- PostgreSQL
- Sequelize
- Kafka Producer
- gRPC

### Ports
- REST: 5004
- gRPC: 50053

---

## Notification Service

### Responsibilities
- Kafka event consumption
- Notification logging
- Event monitoring

### Technologies
- Kafka Consumer
- Node.js

### Port
- REST: 5005

---

# Communication Flow

## REST Communication

They can directly access:
- User Service
- Project Service
- Task Service

through REST endpoints.

---

## GraphQL Communication

Client sends a GraphQL query to API Gateway.
3. S3 is accessed via the S3 API.Each request to the API Gateway gets processed by the query.
3. API Gateway has the capability to communicate with services via gRPC.
4. Aggregated response returned to client.

---

## Kafka Communication

1. Project/Task created.
2. Kafka event published.
3. Kafka broker distributes event.
4. Event is consumed by Notification Service.

---

# Databases

The services are independent of each other, having their own PostgreSQL database.

| Service | Database |
|---|---|
| User Service | user_db |
| Project Service | project_db |
| Task Service | task_db |

---

# Architecture Benefits

- Scalability
- Loose coupling
- Independent deployment
- Fault isolation
- Technology flexibility
- Better maintainability