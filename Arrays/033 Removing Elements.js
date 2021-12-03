// Removing Elements

const numbers = [1, 2, 3, 4];

// Remove from End
// Removes last element from array, and returns it.
const removeLast = numbers.pop();
console.log(numbers);
console.log(removeLast);

const numbers = [1, 2, 3, 4];

// Remove from Front
// Removes first elements from array, and returns it.
const removeFirst = numbers.shift();
console.log(numbers);
console.log(removeFirst);

const numbers = [1, 2, 3, 4];

// Remove from Middle
// Removes given number of elements from array, from an index point
// .splice(Starting index point, number of elements to remove)
const removeMiddle = numbers.splice(2, 2);
console.log(numbers);
console.log(removeMiddle);
