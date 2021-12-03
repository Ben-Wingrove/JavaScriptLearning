// Filtering an Array
//

const numbers = [1, 2, -2, 3];

numbers.filter();
//Syntax (function(VALUE, INDEX, ARRAY[])); ~ index / array are optional
// Looks through given array
// Filters given array through given arguement
// creates new filtered array.

const numbers = [1, 2, -2, 3];

// Search through array 'numbers', return values that are 0+
numbers.filter(function (value) {
  return value >= 0;
});

// Declare this as a constant, that can be called, then call it.
const filtered = numbers.filter(function (value) {
  return value >= 0;
});
console.log(filtered);
// Shows [ 1, 2, 3]

// Single line of code?
// Returning a value?
// Use an Arrow Function!!!

const numbers = [1, 2, -2, 3];

const filtered = numbers.filter((value) => value >= 0);
console.log(filtered);
