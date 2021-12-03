// Iterating an Array
//

const numbers = [1, 2, 3];

//for (let number of numbers)
//console.log(number);

numbers.forEach(function (number) {
  console.log(number);
});

// Same as above..
const numbers = [1, 2, 3];
numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) => console.log(number, index));

// forEach() calls a function for each element in an array:

// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)
// function()   ~ A function to run for each array element.  REQUIRED
// currentValue ~ The value of the current element. REQUIRED
// index        ~ The index of the current element.
// arr          ~ The array of the current element.
// thisValue    ~ A value passed to the function as its this value.
