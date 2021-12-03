// Exercise 1

//Write a function that takes 2 perameters,
//and console logs the entire the array

const numbers = arrayFromRange(-5, 1);

console.log(numbers);

//Attempt 1

const numbers = arrayFromRange(0, 5);

console.log(numbers);

function arrayFromRange(min, max) {
  let i = min;
  do {
    console.log(i);
    i++;
  } while (i <= max);
}

// Attempt 2

const numbers = arrayFromRange(0, 5);

console.log(numbers);

// Step 1 - Declare the array with the given values.
function arrayFromRange(min, max) {
  const array = [min, max];
  // Step 2 - Do while loop
  // Step 3 - Push i each iteration
  let i = min;
  do {
    if (i <= max) array.push(i);
    ++i;
  } while (i <= max);
  // Step 4 - Splice the starting values off the front
  let splicedArray = array.splice(2);
  // Step 5 - Return result
  return splicedArray;
}

//Feedback
// Good attempt, it works, but its a real long, akward way of doing it...
// 1: Get rid of elements in origional declaration
// 2: Get rid of splice
// 3: Change do/while to a for loop.
// Attempt 3

const numbers = arrayFromRange(0, 5);

console.log(numbers);

function arrayFromRange(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) array.push(i);
  return array;
}

//Taught Attempt
const numbers = arrayFromRange(-5, 1);

console.log(numbers);

function arrayFromRange(min, max) {
  // Step 1 - Declare empty array
  const array = [];
  // Step 2 - For loop to generate numbers between min + max
  for (let i = min; i <= max; i++)
    // Step 3 - Push i into the array each iteration.
    array.push(i);
  // Step 4 - Return total result.
  return array;
}
