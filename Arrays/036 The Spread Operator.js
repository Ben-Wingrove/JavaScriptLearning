// The Spread Operator
//
// ...X

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

// Same as const arrayCombined = arrayOne.concat(arrayTwo);
const arrayCombined = [...arrayOne, ...arrayTwo];
console.log(arrayCombined);

// Same as const arraySliced = arrayCombined.slice();
const arraySlice = [...arrayCombined];
console.log(arraySlice);
