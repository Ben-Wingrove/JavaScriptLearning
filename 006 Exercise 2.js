//Exercise 2
// Implement this function
function isLandscape(width, height) {}
// Should return true if Width is greater than height

// Solo Attempt

// Step 1; Define variables to play with
let width = 1600;
let height = 900;

function isLandscape(width, height) {
  return width > height ? "True" : "False";
}
// Step 2; Set Logic "Should return"
// Step 3; Set Condition "if Width is greater than Height"
// Step 4; Set Actions "true" / "false"

let isWidescreen = isLandscape(100, 90);
// Step 5; Setup variable to call function with arguement
// (different perameters than @ time of declaration)
console.log(isWidescreen);
// Step 6; Show us on the console log ~ Returns 'True'

// Feedback
// No need to set up additional variable to call function
// no need to define variables before you start
// "? "True" : "False";" was returning String data, rather than boolean.
// ^ Didnt even need it.

// Attempt With Feedback
function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(1600, 8000));
//
//
// Taught Attempt
function isLandscape(width, height) {
  if (width > height) return true;
  return false;
}
// Step 1; Start with If Else
function isLandscape(width, height) {
  return width > height ? true : false;
}
// Step 2; Replace If/Else with conditional Logic
function isLandscape(width, height) {
  return width > height;
}
// Step 3; Remove later part of return function, to return boolean value
// (Boolean value of true or false.)
console.log(isLandscape(800, 600));
//Step 4; Create console.log to check our code.
console.log(isLandscape(800, 1600));
//Step 5; Amend console.log to check our code if false

// Notes below
//
//
// Function ( )
//
//  function NAME(Parameter, Parameter) {
//  Body of Fuction; Add logic here
//  Statemement;
// }
//
// Once created; Functions need to be called, as such:
// NAME(Arguement, Arguement);
//

//Ternary (Conditional) Operators
//let VARIABLE = VALUE
//let SECOND_VARIABLE = VARIABLE (Comparison Operator) VALUE ? TRUE ACTION : FALSE ACTION
//
