//00
//Practice; Swapping Variables
//
let a = "red";
//Declare variable1 to 'red'
let b = "blue";
//Declare variable2 to 'blue'
console.log(a);
// log variable 1
console.log(b);
//log variable 2
//
//
//
let a = "red";
//Declare variable1 to 'red'
let b = "blue";
//Declare variable2 to 'blue'
let c = a;
//Declare variable3 to hold contents of variable 1 "red"
a = b;
//override variable1 to hold contents of variable 2 "blue"
b = c;
//override variable2 to hold contents of variable3 "red"

console.log(a);
// log variable 1
console.log(b);
// log variable 2
//
//
//
//
//
//
//
//01

//Write a function
//that takes two numbers and
//returns the maximum of the two
//
// Step 1 Declare numbers - A + B
// Step 2 if 1st number is bigger, Log 1st
// Step 2 if otherwise, Log 2nd.

// Function ( )
//
//
//function NAME(Parameter, Parameter) {
  // Body of Fuction; Add logic here
//  Statemement;
}
// Once created; Functions need to be called, as such:
//NAME(Arguement, Arguement);
//
//
//
// Ternary (Conditional) Operators 
//
//
//let VARIABLE = VALUE
//let SECOND_VARIABLE = VARIABLE (Comparison Operator) VALUE ? TRUE ACTION : FALSE ACTION  
//
// if...else
// if the (condition) evaluates to true
// then the statement will be executed
//
//if (condition) {
//  statement;
//} else if (secondCondition) {
//  secondStatement;
//} else if (tenthCondition) {
//  tenthStatement;
//} else lastStatement;
//

// Attempt 1 
let a = 10;
let b = 5; 
function max(a, b) {
  if ( a > b) {
  console.log(a);
}
else console.log(b)
}
max (13, 12)

// Attempt 1 with Feedback 
// Clean curly braces  
// Ensure all ;'s are present 
// replace console.log with return functionality
// add console.log functionality to a variable outside the function
let a = 10;
let b = 5; 

let number = max(7, 7);
console.log (number);

function max(a, b) {
  if ( a > b) return a;
else return b;
}



// Attempt 2
function max(a, b) {
  ( a > b ) ? console.log(a): console.log(b);
}
max (13, 12)

// Attempt 2 with Feedback (Close but no cigar!)
// Where has the logic gone? if? return? 
// Remove console.log  
// add console.log functionality to a variable outside the function
// Make a function is 1 thing
// Call a function is another!

let number = max(14, 12);
console.log (number);

function max(a, b) {
  return ( a > b ) ? a : b;
}

//Taught attempt 1 
function max ()
// Step 1 define function 
function max (a, b) 
// give function 2 perameters 
function max (a,b){

}
// Give function logic 
function max (a,b){
  if (a > b) return a;
  else return b;
}
// If (Condition (is true)) return a;
// else return b;
//
//
//
///Taught attempt 2 
function max (a,b){
  if (a > b) return a;
  else return b;
}
// Remove Else 
function max (a,b){
  if (a > b) return a;
  return b;
}
// Refactor with conditional Logic 
function max (a,b){
  return (a > b) ? a : b;
}
// Dont forget to add a call!
let number = max(10, 12);
console.log (number);
//
//
