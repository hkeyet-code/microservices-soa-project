# Smart Academic Training Platform

Academic management platform is a distributed microservices-based application built with REST, GraphQL, gRPC, Kafka, PostgreSQL, Architecture principles for Docker.

---

# Project Overview

The project Smart Academic Training Platform is a Service Oriented Architecture (SOA) project that will illustrate how independent microservices can communicate with each other with various technologies and protocols.

The platform mimics an up-to-date academic administration system, with the ability to control:
- Users
- Projects
- Tasks
- Analytics

The system integrates:
- REST APIs
- GraphQL API Gateway
- gRPC inter-service communication
- Kafka event streaming
- PostgreSQL databases

This project has been created for educational purposes to showcase more advanced distributed systems concepts and microservices communication patterns.

---

# Architecture Overview

The system is designed using microservices architecture, consisting of several independent services.

## Main Components

### API Gateway
- Central entry point
- Handles GraphQL queries
- Communicates with services using gRPC

### User Service
- Manages users
The server uses a REST API and gRPC.Server implements REST API and gRPC.
- Linked with PostgreSQL User Database

### Project Service
- Manages projects
- REST API + gRPC server
- Produces Kafka events
- Connected to PostgreSQL Project Database

### Task Service
- Manages tasks
- REST API + gRPC server
- Produces Kafka events
- Connected to PostgreSQL Task Database

### Notification Service
- Kafka consumer service
- Receives asynchronous events

---

# Technologies Used

## Backend
- Node.js
- Express.js

## API Communication
- REST API
- GraphQL
- gRPC

## Messaging System
- Apache Kafka

## Database
- PostgreSQL

## ORM
- Sequelize

## Testing Tools
- Postman
- Apollo Sandbox

---

# Project Structure

```bash
microservices-soa-project/

├── api-gateway/
├── user-service/
├── project-service/
├── task-service/
├── notification-service/
├── proto/
├── docs/
├── postman/
└── README.md