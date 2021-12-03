// Arguements

// arguements is an object that returns all the
// different arguements given to a function.

arguements;

let x = 1; // x = number
x = "a"; // x = string

function sum(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum()); // Adds Undefined + Undefined - Shows as NaN
// Shows [arguements] {}
console.log(sum(1)); // Adds 1 + Undefined - Shows as NaN
console.log(sum(1, 2)); // Adds 1 + 2 - Shows as 3
console.log(sum(1, 2, 3, 4, 5, 6)); // Still only adds 1 + 2.
// Shows [arguements] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
// All arguements appear as Index:Value,

// Instead of declaring a and b,
// then adding them, we can tell our functions to
// operate on whatever arguments they are provided with...
// Ex; move from sum of a+b, to sum of all arguemenets
// Step 1 - Declare a total
// Step 2 - Set up a for of loop to iterate arguements
// Arguements is a special object that is iterable
// Step 3 - Add math total should equal + value
// Step 4 - return total
// Step 5 - Console Log the function with arguements
function sum() {
  let total = 0;
  // Step 1
  for (value of arguments) /* Step 2*/ total += value;
  // Step 3
  return total;
  // Step 4
}
console.log(sum(1, 2, 3, 4, 5, 6));
// Step 5
