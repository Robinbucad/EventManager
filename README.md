
# Event Management System

The project has been done with React for the front-end and .NET Web API for the back-end. 

It is an application that creates events and can register attendees.

    1. App installation with docker-compose
    2. Create event with postman.
    3. Register attendee to an event from the front end

# Front 

You can run React App on:
```http
  http://localhost:3000/
```


# Back
## API 

```http
  BASE URL http://localhost:5000
```

#### Client(Postman)

```http
  GET /api/events
  POST /api/events
```

POST Event JSON Body:
```json
  {
    "EventName":"Conference",
    "assistants":[]
  }
```

#### Assistant(React-Form)

```http
  PUT /api/events
```
JSON Body:
```json
  {
    "EventName":"Conference",
    "Name":"Robin",
    "Surname":"Bucad",
    "phone":"OPTIONAL",
    "email":"example@gmail.com"
  }
```



## Installation

Run the application using **docker compose**.

On tappin folder run:

```bash
  docker-compose up
```
    