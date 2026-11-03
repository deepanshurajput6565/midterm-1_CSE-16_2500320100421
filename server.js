const express = require("express");

const app = express();
const port = 3000;
const students = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/students", (_request, response) => {
  response.json(students);
});

app.get("/api/student/:id", (request, response) => {
  const id = Number(request.params.id);
  const student = students.find((record) => record.id === id);

  if (!Number.isInteger(id) || !student) {
    response.status(404).json({ error: `Student with id ${request.params.id} not found` });
    return;
  }

  response.json(student);
});

app.post("/api/students", (request, response) => {
  const { id, name, email, course, age } = request.body ?? {};

  if (
    !Number.isInteger(id) ||
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof course !== "string" ||
    !course.trim() ||
    !Number.isInteger(age)
  ) {
    response.status(400).json({
      error: "id, name, email, course, and age are required with valid values",
    });
    return;
  }

  if (students.some((student) => student.id === id)) {
    response.status(409).json({ error: `Student with id ${id} already exists` });
    return;
  }

  const student = { id, name: name.trim(), email: email.trim(), course: course.trim(), age };
  students.push(student);

  response.status(201).json({
    message: "Student created successfully",
    student,
  });
});

app.use((_request, response) => {
  response.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
