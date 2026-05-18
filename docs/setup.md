# REST API Documentation

# REST APIs

The platform provides REST endpoints to all the microservices.

---

# User Service

## Base URL

```text
http://localhost:5001
```

---

## Create User

### Endpoint

```http
POST /users
```

### Request Body

```json
{
  "name": "Ali",
  "email": "ali@gmail.com"
}
```

---

## Get Users

### Endpoint

```http
GET /users
```

---

# Project Service

## Base URL

```text
http://localhost:5002
```

---

## Create Project

### Endpoint

```http
POST /projects
```

### Request Body

```json
{
  "name": "SOA Platform",
  "description": "Distributed microservices project",
  "status": "active"
}
```

---

## Get Projects

### Endpoint

```http
GET /projects
```

---

# Task Service

## Base URL

```text
http://localhost:5004
```

This document provides installation and setup instructions for Skool.

# Prerequisites

Before running the project install the following software:

- Node.js v18+
- PostgreSQL
- Docker
- Apache Kafka
- Git
- Postman

---

# Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/microservices-soa-project.git

cd microservices-soa-project
```

---

# Install Dependencies

## API Gateway

```bash
cd api-gateway
npm install
```

## User Service

```bash
cd ../user-service
npm install
```

## Project Service

```bash
cd ../project-service
npm install
```

## Task Service

```bash
cd ../task-service
npm install
```

## Notification Service

```bash
cd ../notification-service
npm install
```

---

# Start Docker Services

```bash
docker-compose up -d
```

This command starts:

- PostgreSQL
- Kafka
- Zookeeper

---

# Run Services

## User Service

```bash
cd user-service
node src/index.js
```

---

## Project Service

```bash
cd project-service
node src/index.js
```

---

## Task Service

```bash
cd task-service
node src/index.js
```

---

## Notification Service

```bash
cd notification-service
node src/index.js
```

---

## API Gateway

```bash
cd api-gateway
node src/index.js
```

---

# Access URLs

## GraphQL

```text
http://localhost:4000/graphql
```

## REST APIs

```text
http://localhost:5001/users
http://localhost:5002/projects
http://localhost:5004/tasks
```

---

# Testing Tools

- Postman
- Apollo Sandbox

---

# Troubleshooting

The port specified is already in use.A port is already in use.

Solution:

- Stop existing processes
  Make sure to modify the port in the `.env` file.

---

## Database Connection Error

Solution:
Check that the PostgreSQL server is up and running.

- Check credentials

---

## Kafka Error

Solution:

- Make sure that Kafka and ZooKeeper are running.
