// Exercise 6
//
// Write a function 'countTruthy' that takes an array and returns..
// .. the number of Truthy elements in the array.
//
const array = [1, 2, 3, 0, "", null, undefined, false, NaN];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (value of array) if (value) count++;
  return count;
}

// Lesson 06; KISS - Keep it Simple, Stupid.
//          + Dont forget to tell the function to log
//
// Exercise 6
//
// Write a function 'ifOver100' that takes an array and returns..
// .. the number of elements over 100 in the array.
//
const array = [99, 101, 102, "Marshmallow", "", 103];
console.log(ifOver100(array));
function ifOver100(array) {
  let count = 0;
  for (value of array) if (value > 100) count++;
  return count;
}
