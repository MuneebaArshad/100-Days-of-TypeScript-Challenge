//  Question 57: 
//   Find the Average Grade: Given a list of grades, calculate the average grade.


// A list of grades
let grades = [85, 90, 92, 88, 95];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
