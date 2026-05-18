# Kafka Topics Documentation

# Kafka Integration

Apache Kafka is utilised for the asynchronous event-driven communication between services in the project.

---

# Kafka Components

## Kafka Producer

Implemented in:
- Project Service
- Task Service

Produces and releases events.

---

## Kafka Consumer

Implemented in:
- Notification Service

Is responsible for consuming the events.

---

# Kafka Topics

## project-created

Triggered when:
A new project is established.

Example Event:

```json
{
  "event": "PROJECT_CREATED",
  "projectId": 1,
  "name": "SOA Platform"
}
```

---

## task-created

Triggered when:
A new task is formed.

Example Event:

```json
{
  "event": "TASK_CREATED",
  "taskId": 2,
  "title": "Prepare Documentation"
}
```

---

# Event Workflow

1. User creates resource.
2. Service publishes Kafka event.
3. Kafka broker sends a message.
The event is used by the notification service.
5. Event logged successfully.