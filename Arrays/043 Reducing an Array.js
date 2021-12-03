// Reducing an Array
//
// Calculate Sum of all numbers in array
// Similar to calculating the total value of a shopping cart

numbers.reduce(PrevValue, (CurrentValue) => number);
numbers.reduce();
//Syntax:
//(callbackfn:(
//previousValue: number,
//currentValue: number,
//currentIndex: number,     (Starting From)
//array: number[]) => number

const numbers = [1, 2, -2, 3];

let sum = 0; // Declare variable to perform calculations on
//                      // Declare the elements as 'n'
for (let n of numbers) // Loop through array 'numbers'
  sum = +n; // Add n to sum
console.log(sum); // show sum after loop is finished
// Shows value of 3

// this exact result can be acheived by .reduce()
numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// Declare the constant and log it!
const numbers = [1, 2, -2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Can make this shorter,
const numbers = [1, 2, -2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);
// Starts at first index, rather than at zero.

// And even shorter!
const numbers = [1, 2, -2, 3];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
