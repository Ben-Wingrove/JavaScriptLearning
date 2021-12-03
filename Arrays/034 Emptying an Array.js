// Emptying an Array
//

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// Set an array to empty
// Only applicable if array isn't being referenced.
//

numbers = [];

//
console.log(numbers);
console.log(another);
// In this case, []'numbers' is set to empty
// But []'another' is still full, unchanged by the reset of []'numbers'

let numbers = [1, 2, 3, 4];
let another = numbers;
// Solution 2
// set the length of an array to 0
//

numbers.length = 0;

//
console.log(numbers);
console.log(another);
// In this case []'numbers' is set to empty
// and the []'another', referencing it is also empty.

let numbers = [1, 2, 3, 4];
let another = numbers;
// Solution 3
// use .splice from index 0, for the whole array.
//

numbers.splice(0, numbers.length);

//
console.log(numbers);
console.log(another);

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 4
// use .pop, inside a while loop. ~ Don't use this...
while (numbers.length > 0) numbers.pop();

console.log(numbers);
console.log(another);
