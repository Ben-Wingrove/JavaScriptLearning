// Exercise 03
//
// take array1
// excude given values
// print array2 
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  
}

// Step 1; declare output 
function except(array, excluded) {
const output = [];  

}

//step 2; iterate over origional array. 
function except(array, excluded) {
const output = [];  
for (let element of array)
}

// step 3; for each element, check if element is in if second array,
// if not add to new array. 
function except(array, excluded) {
    const output = [];  
    for (let element of array)
    if (excluded.includes(element)
    }

// Step 4; if its not
function except(array, excluded) {
    const output = [];  
    for (let element of array)
    if (!excluded.includes(element)
    }

// Step 5; Then add the element to the second array 
function except(array, excluded) {
    const output = [];  
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element);
}
// Step 6; return what has been made 
function except(array, excluded) {
    const output = [];  
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element);
    return output; 
}

//


const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
    const output = [];  
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element);
    return output; 
}