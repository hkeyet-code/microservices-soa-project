# REST API Documentation

## User Service

### Get All Users

GET /users

Response:

[
  {
    "id": 1,
    "name": "Hadil",
    "email": "hadil@gmail.com"
  }
]

---

### Create User

POST /users

Body:

{
  "name": "Ali",
  "email": "ali@gmail.com"
}

---

## Auth Service

### Login

POST /auth/login

Body:

{
  "email": "hadil@gmail.com",
  "password": "123456"
}

---

## Project Service

### Create Project

POST /projects

---

### Get Projects

GET /projects

---

## Task Service

### Create Task

POST /tasks

---

### Update Task

PUT /tasks/:id