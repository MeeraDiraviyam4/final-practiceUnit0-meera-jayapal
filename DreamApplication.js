//Create a repo with example code (unit 0) Javascript

// 1. Values, Data Types, and Operations

// Pseudocode:
// 1. Store student name (as string) and quiz score, passing score (as numbers).
// 2. Use console.log to display result.

let studentName = "XYZ"; // string datatype
let quizScore = 95; // number datatype
let passingScore = 70; // number datatype
console.log("Quiz Score: " + quizScore); // operation combining number + string



// 2. Stringing Characters Together  // Use template literal to create a progress update

// Step 1: Set a variable for the number of homework assignments completed.  
// Step 2: Set a variable for the total homework assignments assigned.  
// Step 3: Use a template literal to build a string that combines:  
//         - the student's name,  
//         - the number of homework assignments completed, and  
//         - the total number of homework assignments.  
// Step 4: Save this combined string into a variable called homeworkMessage.  
// Step 5: Use console.log to display result.
let homeworkCompleted = 3;
let homeworkTotal = 5;
let homeworkMessage = `${studentName} has completed ${homeworkCompleted} out of ${homeworkTotal} homework assignments.`;
console.log(homeworkMessage);



// 3. Control Structures and Logic // Check if student passed quiz

// Step 1: Compare the student's quiz score to the minimum passing score.  
// Step 2: If the quiz score is greater than or equal to the passing score:  
//         - Print a success message showing the student passed.  
// Step 3: Otherwise (if the score is less than the passing score):  
//         - Print a message showing the student needs more practice.
if (quizScore >= passingScore) {
  console.log(studentName + " passed the quiz! ");
} else {
  console.log(studentName + " needs more practice before the next quiz.");
}



// 4. Building Arrays  // Array to track quiz scores over several weeks

// Step 1: Create an array called quizScores to store multiple quiz results.  
// Step 2: Add a set of numeric quiz scores into the array.  
// Step 3: Use console.log to display the entire array, showing all scores recorded so far.
let quizScores = [85, 90, 78, 88]; 
console.log("Scores so far: " + quizScores);



// 5. Using Arrays  // Loop to calculate average score

// Step 1: Initialize a variable totalScore to 0 to hold the sum of all quiz scores.  
// Step 2: Loop through each element in the quizScores array.  
// Step 3: On each loop iteration, add the current quiz score to totalScore.  
// Step 4: After the loop finishes, divide totalScore by the total number of quiz scores (array length).  
// Step 5: Store the result in a variable called average.  
// Step 6: Print the average score to the console.
let totalScore = 0;
for (let i = 0; i < quizScores.length; i++) {
  totalScore += quizScores[i]; // adds each score in the array
}
let average = totalScore / quizScores.length;
console.log("Average Quiz Score: " + average);



// 6. Creating and Using objects   // Store all student info in one object

// Step 1: Create an object called student to group related data together.  
// Step 2: Inside the object, store:  
//         - name (string) to hold the student's name,  
//         - attendance (array) to track attendance history,  
//         - homework (number) to track how many assignments are completed,  
//         - quizzes (array) to track quiz scores.  
// Step 3: Use dot notation (student.name, student.homework) to access specific data from the object.  
// Step 4: Print a message showing the student’s name along with the number of completed homework assignments.
let student = {
  name: "XYZ",
  attendance: ["Present", "Absent", "Present"],
  homework: 3,
  quizzes: [85, 90, 78]
};

console.log(student.name + " has " + student.homework + " completed homework assignments.");
