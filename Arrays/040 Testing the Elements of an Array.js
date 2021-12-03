// Testing the Elements of an Array

const numbers = [1, 2, 3];

numbers.every();
//Syntax (function(VALUE, INDEX, ARRAY[])); ~ index / array are optional
// Checks every element True or False
// As soon as it finds False, it stops searching

numbers.some();
//Syntax (function(VALUE, INDEX, ARRAY[])); ~ index / array are optional
// Checks at least one element True or False
// as soon as it finds True, it stops searching.

const numbers = [1, 2, -2, 3];

numbers.every(function (value) {
  return value >= 0; //Will evaluate, return Boolean
});

// Declare the function as a constant that can be called.
const allPositive = numbers.every(function (value) {
  return value >= 0; //Will evaluate, return Boolean
});
console.log(allPositive);
// Returns False

const numbers = [1, 2, -2, 3];

numbers.some(function (value) {
  return value >= 0; //Will evaluate, return Boolean
});

// Declare the function as a constant that can be called.
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0; //Will evaluate, return Boolean
});
console.log(atLeastOnePositive);
// Returns True
