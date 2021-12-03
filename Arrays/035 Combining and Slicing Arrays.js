// Combining and Slicing Arrays
//
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

// Concat(inate) - link (things) together in a chain or series.
// Syntax~ FirstArray.concat(SecondArray);

const arrayCombined = arrayOne.concat(arrayTwo);
console.log(arrayCombined);

const arraySliced = arrayCombined.slice();

// Slice - slice out peice of an array.
// Syntax 1 ~ Array.slice(starting Index, ending index)
// Syntax 2 ~ Array.slice(starting Index) [shows from X onwards]
// Syntax 3 ~ Array.slice() [Shows copy of original array]

// If primitive type, values will be copied.
// If reference type, values will not be copied.
