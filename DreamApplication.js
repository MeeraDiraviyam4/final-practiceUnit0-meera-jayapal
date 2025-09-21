// ===============================================
// 1. Values, Data Types, and Operations
// ===============================================
// Pseudocode:
// 1. Store multiple student names (as strings) and quiz scores, passing score (as numbers).
// 2. Use console.log to display results.

let passingScore = 70; // number datatype for all students

let students = [
  { name: "Robert", quizScore: 95 },
  { name: "Aisha", quizScore: 82 },
  { name: "Shine", quizScore: 65 }
];

for (let i = 0; i < students.length; i++) {
  console.log("Quiz Score for " + students[i].name + ": " + students[i].quizScore);
}


// ===============================================
// 2. Stringing Characters Together
// ===============================================
// Pseudocode:
// Step 1: Assign completed and total homework for each student.
// Step 2: Use a template literal to build a string.
// Step 3: Save into homeworkMessage.
// Step 4: Display with console.log.

students[0].homeworkCompleted = 3;
students[0].homeworkTotal = 5;

students[1].homeworkCompleted = 4;
students[1].homeworkTotal = 5;

students[2].homeworkCompleted = 2;
students[2].homeworkTotal = 5;

for (let i = 0; i < students.length; i++) {
  let homeworkMessage = `${students[i].name} has completed ${students[i].homeworkCompleted} out of ${students[i].homeworkTotal} homework assignments.`;
  console.log(homeworkMessage);
}


// ===============================================
// 3. Control Structures and Logic
// ===============================================
// Pseudocode:
// Step 1: Compare each student's score to passing score.
// Step 2: Print pass or needs practice message.

for (let i = 0; i < students.length; i++) {
  if (students[i].quizScore >= passingScore) {
    console.log(students[i].name + " passed the quiz!");
  } else {
    console.log(students[i].name + " needs more practice before the next quiz.");
  }
}


// ===============================================
// 4. Building Arrays
// ===============================================
// Pseudocode:
// Step 1: Create an array quizScores to store results of all students.
// Step 2: Use console.log to show the array.

let quizScores = [];
for (let i = 0; i < students.length; i++) {
  quizScores.push(students[i].quizScore);
}
console.log("Scores so far: " + quizScores);


// ===============================================
// 5. Using Arrays - for loop & while loop
// ===============================================
// Pseudocode:
// Step 1: Initialize totalScore = 0.
// Step 2: Use for loop to sum scores.
// Step 3: Divide to get average.
// Step 4: Repeat with while loop.

// --- Using for loop ---
let totalScore = 0;
for (let i = 0; i < quizScores.length; i++) {
  totalScore += quizScores[i];
}
let averageForLoop = totalScore / quizScores.length;
console.log("Average Quiz Score (for loop): " + averageForLoop);

// --- Using while loop ---
let j = 0;
let totalWhile = 0;
while (j < quizScores.length) {
  totalWhile += quizScores[j];
  j++;
}
let averageWhileLoop = totalWhile / quizScores.length;
console.log("Average Quiz Score (while loop): " + averageWhileLoop);


// ===============================================
// 6. Creating and Using Objects
// ===============================================
// Pseudocode:
// Step 1: Add more detail to each student object: name, attendance, homework count, quizzes.
// Step 2: Add a method calculateAverage using a loop.
// Step 3: Use dot notation to display info.

let detailedStudents = [
  {
    name: "Robert",
    attendance: ["Present", "Absent", "Present"],
    homework: 3,
    quizzes: [85, 90, 78],
    calculateAverage: function() {
      let sum = 0;
      for (let i = 0; i < this.quizzes.length; i++) {
        sum += this.quizzes[i];
      }
      return sum / this.quizzes.length;
    }
  },
  {
    name: "Aisha",
    attendance: ["Present", "Present", "Present"],
    homework: 4,
    quizzes: [92, 88, 95],
    calculateAverage: function() {
      let sum = 0;
      let i = 0;
      while (i < this.quizzes.length) {
        sum += this.quizzes[i];
        i++;
      }
      return sum / this.quizzes.length;
    }
  },
  {
    name: "Shine",
    attendance: ["Absent", "Present", "Absent"],
    homework: 2,
    quizzes: [60, 72, 68],
    calculateAverage: function() {
      let sum = 0;
      for (let i = 0; i < this.quizzes.length; i++) {
        sum += this.quizzes[i];
      }
      return sum / this.quizzes.length;
    }
  }
];

for (let i = 0; i < detailedStudents.length; i++) {
  let s = detailedStudents[i];
  console.log(s.name + " has " + s.homework + " completed homework assignments.");
  console.log(s.name + "'s average quiz score is: " + s.calculateAverage());
}
