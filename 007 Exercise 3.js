// Exercise 3
// Create the fizzBuzz algorithm
// Rule 1; if input / 3 = Fizz
// Rule 2; if input / 5 = Buzz
// Rule 3; if input is /3 + /5 = FizzBuzz
// Rule 4; if not divisible by 3 or 5 = input
// Rule 5; If input not a number  = NaN
//

const output = fizzBuzz(x);
console.log(output);
function fizzBuzz(input) {}

//
//
// 3rd solo attempt - then Ragequit after line 20 doesn't work
const output = fizzBuzz(3);
console.log(output);
function fizzBuzz(input) {
  if (input !== Number) return NaN;
  // Check if number ??????? - Didn't work?
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  // Check if input is Divisible by 3 + Divisible by 5 - if so Return FizzBuzz
  else if (input % 3 === 0) return "Fizz";
  // Check if input is Divisible by 3; if so return Fizz
  else if (input % 5 === 0) return "Buzz";
  //Check if input is dividsible by 5; if so return Buzz
  else return input;
  // If all else fails, return the input.
}

// Feedback
// Line 20- replace (typeoff input !== 'number')
// Line 22 - add () around each condition between &&
//

const output = fizzBuzz("post");
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  // Check if typeof input IS NOT EQUAL TO 'number' ~ if true return NaN
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  // Check if input is Divisible by 3 + Divisible by 5 - if so Return FizzBuzz
  else if (input % 3 === 0) return "Fizz";
  // Check if input is Divisible by 3; if so return Fizz
  else if (input % 5 === 0) return "Buzz";
  //Check if input is dividsible by 5; if so return Buzz
  else return input;
  // If all else fails, return the input.
}

// Taught attempt
const output = fizzBuzz(x);
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

// Ternary (Conditional) Operators
//
//
//let VARIABLE = VALUE
//let SECOND_VARIABLE = VARIABLE (Comparison Operator) VALUE ? TRUE ACTION : FALSE ACTION
//
// if...else
// if the (condition) evaluates to true
// then the statement will be executed
//
//if (condition) {
//  statement;
//} else if (secondCondition) {
//  secondStatement;
//} else if (tenthCondition) {
//  tenthStatement;
//} else lastStatement;
