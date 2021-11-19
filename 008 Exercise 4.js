// Exercise 04
//
// Rules =
// Speed limit = 70mph
// If car is driving under limit - print Ok
// if car is driving @70mph - print Ok
// if car is driving @74mph - still ok
// for every 5mph over the limit,  get 1 point
// If car gets more than 12 points - print suspended
// HINT; Use Math.floor() ~
// Math.floor() function returns the
//      largest integer less than or equal to a given number.

// Implement This function;

checkSpeed(50);

function checkSpeed(speed) {}

// Attempt 1
const speedLimit = 70;
const speedLimitLeeway = 5;
checkSpeed(75);
function checkSpeed(speed) {
  if (speed < speedLimit + speedLimitLeeway) console.log("Ok");
  else if (speed >= speedLimit + speedLimitLeeway && speed < 130)
    console.log((speed - 70) / 5 + " " + "Points");
  else console.log("Suspended Licence!");
}
//
// 'Works' but gives decimal numbers
// Calculates value during log, rather than showing a calculated value
// Math in wrong order.
//
//
// Feedback Attempt 1
const speedLimit = 70;
const speedLimitLeeway = 5;
checkSpeed(112);
function checkSpeed(speed) {
  if (speed < speedLimit + speedLimitLeeway) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / speedLimitLeeway);
  if (points >= 12) console.log("Suspended Licence!");
  else console.log("Points", points);
}

// Taught Attempt
//

checkSpeed(50);
function checkSpeed(speed) {}
// Step 1 Define Fuction.
//

checkSpeed(50);
function checkSpeed(speed) {
  if (speed > 70) console.log("Ok");
}
// Step 2 Check if speed is lower than speed limit

const speedLimit = 70;
checkSpeed(50);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
}
// Step 3; Replace magic number with Constant

const speedLimit = 70;
checkSpeed(50);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    (speed - speedLimit) / 5;
  }
}
// Step 4; Else calculate points

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(50);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    (speed - speedLimit) / kmPerPoint;
  }
}
// Step 5; Replace magic number

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(50);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    let points = (speed - speedLimit) / kmPerPoint;
  }
}
// Step 6; Declare expression/calculation as a variable

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(150);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
  }
}
// Step 7; result of expression could be floating point number
//         Use math.floor to round it up

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(150);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("Licence Suspended");
  }
}
// Step 8; Check if driver gets more than 12 points

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(71);
function checkSpeed(speed) {
  if (speed < speedLimit) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("Licence Suspended");
    else console.log("Points", points);
  }
}
// Step 9; Set else condition (if the driver has less than 12 points)
// Step 10; change let points to const points.
// Step 11; Check function @ Speed71(Found Bug)
// Step 11a; Bug; Shows 0 Points instead of OK

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(130);
function checkSpeed(speed) {
  if (speed <= speedLimit + kmPerPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("Licence Suspended");
    else console.log("Points", points);
  }
}
// Step 12; add to if Statement to fix bug.

const speedLimit = 70;
const kmPerPoint = 5;
checkSpeed(130);
function checkSpeed(speed) {
  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("Licence Suspended");
  else console.log("Points", points);
}
// Step 13; Condense / clean the Code
