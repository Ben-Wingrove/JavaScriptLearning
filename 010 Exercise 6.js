// Exercise 6
//
// Write a function 'countTruthy' that takes an array and returns..
// .. the number of Truthy elements in the array.
//
// Refresher; Truthy value is not literal True; 
// But a something value that is identified as 'truthy' 
// Truthy = 12312, 'Mosh', etc
// Falsy = 0, '', null, undefined, false, NaN
//

const array = [1, 2, 3, 0, '', null, undefined, false, NaN];

function countTruthy(array) {

}

countTruthy (1, 2, 3, 0)



//Taught attempt
const array = [1, 2, 3, 0, '', null, undefined, false, NaN];
//Step 1 - Declare variable 'count'
function countTruthy(array) {
 let count = 0; 
}
//Step 2 - Add for of loop to iterate array 
function countTruthy(array) {
    let count = 0; 
    for (value of array)
}
//Step 4 - Add If ~ each element is truthy or not
function countTruthy(array) {
    let count = 0; 
    for (value of array)
    if (value)
}
//Step 5 - If its truthy; we're going to increment the count
function countTruthy(array) {
    let count = 0; 
    for (value of array)
    if (value)
    count++;
}
//Step 6 - return the value of the count
function countTruthy(array) {
    let count = 0; 
    for (value of array)
    if (value)
    count++;
    return count;
}


