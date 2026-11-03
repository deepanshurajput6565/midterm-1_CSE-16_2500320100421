task1 :
. create a node.js project and initilie it using npm init
. install and configure express.js
. configure the server to run on port 3000
. use appropriate middleware including express.json()

task 2 :
. create student records implement : post/api/students
accept student information in Json format 
{
    "id" : 101,
    "name" : "rahul sharma",
    "email": "rahul@gmail.com",
    "course" : "cse",
    "age" : 21
}
. accept student details thriugh the reuest body
. validate mandatory fields
. prevent duplicate student ids
. store the student record in an in-memory array
. return an appropriate success response.

task 3 : retrieve student records
implement the following apis:

. GET/api/students -retrieve all student records
. GET/api/student/:id - retrieve a specific student using their id
. return the requested student if the id exists; othewise return an appropiate error response

task 4: update student details
implement: PUT/api/student/:id
. accept updated student information through the reuest body
. identity the student using the id provided in the url
. update the existing student record
. return a suitable success or error response

Task 5: Delete student records
- Implement `DELETE /api/students/:id`.
- Identify the student using the ID provided in the URL.
- Delete the corresponding student record from the array.
- Return a suitable success or error response.

Status codes:
- `200 OK` - The request succeeded (retrieval, update, or delete).
- `201 Created` - The student was created successfully.
- `400 Bad Request` - The request contains invalid input.
- `404 Not Found` - The requested student does not exist.
- `409 Conflict` - A student with the same ID already exists.
- `500 Internal Server Error` - An unexpected server error occurred.