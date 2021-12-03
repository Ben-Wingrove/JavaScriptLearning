//Adding Elements
//
//
const numbers = [3, 4];
numbers = []; /// === ERROR
//cant reassign numbers, but we can add to it!

const numbers = [3, 4];
// 3 Methods can be used to add to an array

// 1: add numbers onto the end of the array
// 1: PUSH the new numbers onto the end.
numbers.push(5, 6);

// 2: add numbers at the beginning of the array
// 2: UNSHIFT; SHIFT the existing numbers to the back.
numbers.unshift(1, 2);

// 3: add (or remove) numbers to the array
// 3: SPLICE the new data whever you want it
// 3: .splice(starting index position, delete X numbers, items to add)
numbers.splice(2, 0, 2.4, 2.6);
console.log(numbers);
