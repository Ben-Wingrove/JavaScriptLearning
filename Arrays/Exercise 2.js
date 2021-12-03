// Exercise 2
//
//
//create function 'Includes'
// Checks to see if a given element exists within an array
// that takes an array, and a search element
// if search element is present, return true
// if not, false

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
  numbers.some(searchElement, 0, array);
}
//Syntax (function(VALUE, INDEX, ARRAY[])); ~ index / array are optional

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

function includes(array, searchElement) {
  for (let element of array);
  if (element === searchElement) return true;
  return false;
}
