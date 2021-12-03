// Exercise 4
//
// Moving an element.

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1); // Example.
//                                      In array 'numbers'
//                                      Move item index 0,
//                                      1 position

console.log(output);
function move(array, index, offset) {
  const position = index + offset; // Declare a constant 'position' - that is the value of index + offset
  if (position >= array.length || position < 0) {
    // IF position is morethan or equal to the .length of 'array', ||(or) position is lessthan 0
    console.error("Invalid Offset"); // Then return an error "invalid offset"
    return; // Then end the function, and return to the top.
  } // In this case, if true - stop function - otherwise function will continue.

  const output = [...array]; // Declare a constant 'output' -  that is (=)- a copy of (...)- the variable 'array'- Inside an array([])-
  const element = output.splice(index, 1)[0]; // Declare a constant 'element' - that is (=)- a spliced version (.splice)- of the constant 'output'-  (Starting Number, Delete count) [Index]
  //                                                    // Remember .Splice will return a brand new array
  output.splice(position, 0, element); // Splice (.splice)- the constant 'output'- (starting number, delete count, added number);
  return output; // Return the result
}

//Step 1 - declare output
//Step 2 - Copy array.with spread ...

function move(array, index, offset) {
  const output = [...array];
}

// Step 3 - remove element from array
function move(array, index, offset) {
  const output = [...array];
  output.splice(index, 1)[0]; // (Starting Number, Delete count) [0]
  //(function returns an array, here we are looking at the first value [index 0]
  // within the new array )
}

// Step 4 - Store the removed element as a constant
function move(array, index, offset) {
  const output = [...array];
  const element = output.splice(index, 1)[0]; // (Starting Number, Delete count)
}

// Step 5 - put the stored constant back in, at the new location
// Step 6 - Return the output.
function move(array, index, offset) {
  const output = [...array];
  const element = output.splice(index, 1)[0]; // (Starting Number, Delete count)
  output.splice(index + offset, 0, element); // (starting number, delete count, added number)
  // Here our added number is 'element' that was declared on the previous line.
  return output;
}

// Step 7 - Basic validation before running algorithm
// Step 8 - declare position
function move(array, index, offset) {
  const position = index + offset; // Declare a constant 'position' - that is the value of index + offset
  if (position >= array.length || position < 0) {
    // IF position is morethan or equal to the .length of 'array', ||(or) position is lessthan 0
    console.error("Invalid Offset"); // Then return an error "invalid offset"
    return; // Then end the function, and return to the top.
  } // In this case, if true - stop function - otherwise function will continue.

  const output = [...array]; // Declare a constant 'output' -  that is (=)- a copy of (...)- the variable 'array'- Inside an array([])-
  const element = output.splice(index, 1)[0]; // Declare a constant 'element' - that is (=)- a spliced version (.splice)- of the constant 'output'-  (Starting Number, Delete count) [Index]
  //                                                // Remember .Splice will return a brand new array
  output.splice(position, 0, element); // Splice (.splice)- the constant 'output'- (starting number, delete count, added number);
  return output; // Return the result
}
