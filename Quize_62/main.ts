// Question 62:*
//  Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
 

// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "Ayan Arshad",
    age: 22,
    courses: ["python", "java", "c++"]
};

// Showing the student's information
console.log(student);
