// Part 2: Variable Declarations
const internName = "Tracey Shammah";  
let taskOne = 10;
let taskTwo = 8;
var taskThree = 6;

// Calculate total and average
const totalScore = taskOne + taskTwo + taskThree;
const averageScore = totalScore / 3;

// Determine grade using if-else
let grade;

if (averageScore >= 9) {
  grade = "A";
} else if (averageScore >= 8) {
  grade = "B";
} else if (averageScore >= 7) {
  grade = "C";
} else if (averageScore >= 6) {
  grade = "D";
} else {
  grade = "E";
}

// Display output using template literals
console.log(`Intern Name: ${internName}`);
console.log(`Task One Score: ${taskOne}`);
console.log(`Task Two Score: ${taskTwo}`);
console.log(`Task Three Score: ${taskThree}`);
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Final Grade: ${grade}`);

// Switch statement to show feedback
switch (grade) {
  case "A":
    console.log("Excellent performance!");
    break;
  case "B":
    console.log("Great job! Keep aiming high.");
    break;
  case "C":
    console.log("Good effort. Try to improve.");
    break;
  case "D":
    console.log("You're close. Keep working at it.");
    break;
  case "E":
    console.log("Don't give up. You can do better next time.");
    break;
  default:
    console.log("Invalid grade");
}
