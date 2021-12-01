// Exercise 1.
// Write a function that takes two numbers
// And returns the larger of the two.

let a = 5;
let b = 10;

let number = larger(a, b);
console.log(number);

function larger(a, b) {
  if (a > b) return a;
  else return b;
}

// Cleaner
function larger(a, b) {
  return a > b ? a : b;
}

// Exercise 2.
// Implement this function, that returns true or false.

let result = isLandscape(600, 400);
console.log(result);

function isLandscape(width, height) {
  return width > height ? true : false;
}

// Cleaner + Better. ~ Don't explicitly return true or false.
// JS Engine will do that for us.
let result = isLandscape(600, 400);
console.log(result);

function isLandscape(width, height) {
  return width > height;
}

// Exercise 3.
// FizzBuzz Algorithm
// Rule 1; if input / 3 = Fizz
// Rule 2; if input / 5 = Buzz
// Rule 3; if input is /3 + /5 = FizzBuzz
// Rule 4; if not divisible by 3 or 5 = input
// Rule 5; If input not a number  = NaN

const output = fizzBuzz(1);
console.log(output);

function fizzBuzz(input) {
  if (typeof input != "number") return NaN;
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else return input;
}

// Exercise 4.
// Speed limit - 70
// If @ 74 - still ok
// 5 mph over limit = 1 point
// max points =  12
// >12 points - "Licence Suspended"
// Hint - use Math.floor(value)

checkSpeed(100);

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointThreshhold = 5;
  const points = Math.floor((speed - speedLimit) / pointThreshhold);

  if (speed < speedLimit + pointThreshhold) console.log("OK");
  else if (points >= 12) console.log("Driving Ban");
  else console.log(points, "Points");
}

//Should have been...
checkSpeed(100);

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointThreshhold = 5;
  const points = Math.floor((speed - speedLimit) / pointThreshhold);

  if (speed < speedLimit + pointThreshhold) {
    console.log("OK");
    return;
  }
  if (points >= 12) console.log("Driving Ban");
  else console.log(points, "Points");
}

// Exercise 5
// Write function that takes <limit>
// show all numbers from 0 to <limit>
// show all odd labeled ODD
// show all even labeled EVEN

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, " EVEN");
    else console.log(i, " ODD");
  }
}

// Step 1 - For loop to iterate from 0 to <limit>
// Step 2 - If condition - Action
// Step 3 - Else - Acion

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++)
    i % 2 === 0 ? console.log(i, " EVEN") : console.log(i, " ODD");
}
// Step 1 - for loop to iterate from 0 to <limit>
// Step 2 - ternary operator

// Exercise 6
// Create function - takes an array and returns truthy elements in array.
//

const array = [1, 2, 3, 0, "", null, undefined, 1];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let key of array) if (key) count++; // Just checks if value is true/truthy
  return count;
}

// Exercise 7
// Create function that will display
// all properties of object that are of type string

const movie = {
  title: "a",
  releaseYear: 2000,
  rating: 5,
  director: "b",
};

showProperties(movie);

function showProperties(object) {
  for (let key in object)
    if (typeof object[key] === "string")
      // if type of KEY inside OBJECT is string
      console.log(key, object[key]); // Log key + value of key
}

// Exercise 8
// Create function that will calculate
// Sum of all multiples of 3 and 5 upto the given limit
// Ex 10 ;
// x3; 3, 6, 9.
// x5; 5, 10
// sum of total; 33.

console.log(sum(10));

function sum(limit) {
  let count = 0;
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0) count += i;
    else if (i % 5 === 0) count += i;
  return count;
}

// Cleaner
console.log(sum(10));

function sum(limit) {
  let count = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) count += i;

  return count;
}

// Exercise 9
// Create function that will calculate the grade of a student
// Calculates average mark
// maps average to grade
//0-59F
//60-69D
//70-79C
//80-89B
//90-100A

// Step 1 calculate average of array
// step 2 map number to outcome through conditional logic

const marks = [80, 80, 100]; // Array

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  let averageMarks = sum / marks.length;

  if (averageMarks < 60) return "Grade F";
  if (averageMarks < 70) return "Grade D";
  if (averageMarks < 80) return "Grade C";
  if (averageMarks < 90) return "Grade B";
  return "Grade A";
}

// Difficult as fuck.
// Keep it Simple Stupid... Should be 2 functions.

const marks = [80, 80, 100]; // Array

console.log(calculateGrade(marks));

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

function calculateGrade(marks) {
  const averageMarks = calculateAverage(marks);

  if (averageMarks < 60) return "Grade F";
  if (averageMarks < 70) return "Grade D";
  if (averageMarks < 80) return "Grade C";
  if (averageMarks < 90) return "Grade B";
  return "Grade A";
}

// Exercise 10
// showStars(1) =   *
//
// ShowStars(3) =   *
//                  **
//                  ***

showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

// Exercise 11
// write function - shows prime numbers up to (limit)
// prime numbe who's factor is only 1 and its self.
//

showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

//Exercise 11.5
//Split into 2 functions

showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
