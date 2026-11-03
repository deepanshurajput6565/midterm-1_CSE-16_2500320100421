# Express.js Server

A Node.js project using Express.js, configured to listen on port `3000`.

## Requirements

- Node.js 18 or later
- npm

## Run

```sh
npm install
npm start
```

The server listens on port `3000`. JSON and URL-encoded request bodies are parsed
using Express middleware.

The in-memory student list starts with a sample student whose ID is `101`.

## Endpoint

- `GET /` returns `{"status":"ok"}` with status `200`.
- `POST /api/students` creates a student from a JSON body containing an integer
  `id`, non-empty `name`, `email`, and `course`, and an integer `age`. Records
  are stored in memory and duplicate IDs are rejected.
- `GET /api/students` returns all students.
- `GET /api/student/:id` returns a student by ID, or a `404` error if no student
  has that ID.
- `PUT /api/student/:id` replaces a student's name, email, course, and age
  using the JSON request body. The URL ID identifies the student and cannot be
  changed.
- Other paths or HTTP methods return `{"error":"Not found"}` with status `404`.
