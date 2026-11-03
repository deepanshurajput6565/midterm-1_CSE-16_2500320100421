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
