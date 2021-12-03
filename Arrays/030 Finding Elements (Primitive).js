// Finding elements (Primitive)
//
const numbers = [1, 2, 3, 4, 1];

// numbers.indexOf(x,y)
// This Function looks for the Index of X,
// begining from Index position Y. (Y is totally optional)
// If the value does not exist, it will return -1
console.log(numbers.indexOf(1));
// >Return the index position of 1
console.log(numbers.indexOf(1, 3));
// >Return the index position of 1, begin search @ Index position 3.
console.log(numbers.indexOf("Spaghetti"));
// >Return the index position of 'Spaghetti' ~ Returns -1.

const numbers = [1, 2, 3, 4, 1];

// numbers.lastIndexOf(x)
// This function looks for the last index position of X
// begining from Index position Y. (Y is totally optional)
// If the value does not exist, it will return -1
console.log(numbers.lastIndexOf(1));
// >Return the last index position of 1
console.log(numbers.lastIndexOf(1, 3));
// >Return the last index position of 1, begin search @ Index position 3.
console.log(numbers.lastIndexOf("Spaghetti"));
// >Return the last index position of 'Spaghetti' ~ Returns -1.

const numbers = [1, 2, 3, 4, 1];

// numbers.includes(x, y)
// This function returns true or false, if X is included in array
// begining from Index position Y. (Y is totally optional
console.log(numbers.includes(1));
// >Return Boolean if array includes 1
console.log(numbers.includes(1, 3));
// >Return Boolean if array includes 1, begin search @ Index position 3.
console.log(numbers.lincludes("Spaghetti"));
// >Return Boolean if array includes 'Spaghetti'.
