// The Rest Operator

// function name(...variable) {}
//               ^^^
// The rest operator will show the rest of the
// arguements in an array
// Don't confuse with Spread operator (look the same)

// Example from last lesson
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

// Function below operates exactly as example in last lesson
// With far fewer lines of code

function sum(...args) {
  //Step 1
  return args.reduce((a, b) => a + b); //Step 2-6
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Step 1 - Rest operator         ...
// Step 2 - Reduce operator       .reduce()
// Step 3 - .Reduce(a, b)
// Step 4 - Arrow Function        =>
// Step 5 - maths
// Step 6 - Return
// Step 7 - Console Log.

// Real world example -

function sum(...args) {
  //sum of The rest of arguements
  return args.reduce((a, b) => a + b);
  //return - reduce arguements to a and b
  //  (function) => a + b
}
console.log(sum(1, 2, 3, 4, 5, 6));

function sum(discount, ...prices) {
  // sum of discount, and the rest of prices
  const total = prices.reduce((a, b) => a + b);
  // declare total = reduce prices to a and b.
  // (function) => a + b
  return total * (1 - discount);
  // return (maths) total * (1 - discount)
}
console.log(sum(0.1, 50, 50));
