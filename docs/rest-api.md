# REST API Documentation

# REST APIs

The platform makes REST endpoint available for every microservice.

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

---

## Create Task

### Endpoint

```http
POST /tasks
```

### Request Body

```json
{
  "title": "Build GraphQL API",
  "description": "Complete GraphQL implementation",
  "status": "completed",
  "projectId": 1
}
```

---

## Get Tasks

### Endpoint

```http
GET /tasks
```