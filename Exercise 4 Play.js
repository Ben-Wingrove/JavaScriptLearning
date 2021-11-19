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
// Math.floor() function returns an integer to the lowest whole number

// Implement This function;

checkSpeed(50);

function checkSpeed(speed) {}
//
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

// Lesson 04 Math.floor() function returns an integer to the lowest whole number  (Ex 33.6 becomes 33)
//

// Play 04
// Calorifc Intake;Is it Surplus or Deficit?
// Rule 1; Caorific intake should be 2400 - return Sustained
// rule 2; if above; surplus
// rule 3; if above over 500; at risk of becoming fat
// rule 4; if below; deficit
// rule 5; if below over 500; at risk of becoming thin

// Step 1; Declare function
function checkCal(cal) {}
// Step 2: Start Rule 1
function checkCal(cal) {
  if ((cal = 2400)) console.log("Ok");
  return;
}
// Step 3; Create call with arguement to check function
checkCal(2400);
function checkCal(cal) {
  if ((cal = 2400)) console.log("Sustained");
  return;
}
// Returns 'Sustained' - Code works... But doesn't work if anything else than 2400 is entered
//
//Step 4; Logic currently starts on Cal sustained - this should be the end point.
checkCal(2401);
function checkCal(cal) {
  if (cal !== 2400) console.log("Something");
  else console.log("Sustained");
}
// Returns 'Sustained' for 2400 - Returns 'Something' for 2401 / 2000
//
//Step 5; Declare magic numbers - should have done this sooner!
const calExpected = 2400;
const calTolerance = 400;
checkCal(2801);
function checkCal(cal) {
  if (cal > calExpected) console.log("Surplus");
  else if (cal >= calExpected + calTolerance)
    console.log("At risk of weight gain");
  else console.log("Sustained");
}
//I think this works... Testing... It doesn't.
//
//Step 6; Realised i need to refactor logic
const calExpected = 2400;
const calTolerance = 400;
checkCal(2400);
function checkCal(cal) {
  if (cal >= calExpected + calTolerance) console.log("At risk of weight gain");
  else if (cal > calExpected) console.log("Surplus");
  else console.log("Sustained");
}
// 2799 registers Surplus, 2800+ registers 'at risk of weight gain'
//
// Step 7; Add secondary if / else if logic
const calExpected = 2400;
const calTolerance = 400;
checkCal(2400);
function checkCal(cal) {
  if (cal >= calExpected + calTolerance) console.log("At risk of weight gain");
  else if (cal > calExpected) console.log("Surplus");
  else if (cal <= calExpected - calTolerance)
    console.log("At risk of weight loss");
  else if (cal < calExpected) console.log("Deficit");
  else console.log("Sustained");
}

// Code works, but ugly / too long to compute
// multiple statements are true at once, thats why its confusing
// Why so many if else statements - only need 1 if / else if / else  - move computation out into other functions or method to return value

// Math too long - 5 lines will take 5 seconds to read on Visual Studio Code, but take 5 seconds to run
// Below the 20ish lines of coder will take 20 seconds to read on Visual Studio Code, but take less than a second to run
// Step 8; refactor - take calculations out of console log?

const calTolerance = 400;
const calExpected = 2400;
checkSurplus();
function checkSurplus(cal) {
  let result = cal > calExpected ? "Surplus" : "Deficit";
  return result;
}
checkCal(2500);
function checkCal(cal) {
  if (cal == calExpected) {
    console.log("Sustained");
  } else if (checkSurplus(cal) == "Surplus") {
    cal >= calExpected + calTolerance
      ? console.log("At risk of weight gain")
      : console.log("Surplus");
  } else {
    cal <= calExpected - calTolerance
      ? console.log("At risk of weight loss")
      : console.log("Deficit");
  }
}

// method takes value - runs + returns unused string, rather than a boolean outcome of computations
// Step 9; refactor - and ensure outcomes are boolean!

const calTolerance = 400;
const calExpected = 2400;
checkSurplus();
function checkSurplus(cal) {
  let result = cal > calExpected;
  // Replace Strings Surplus : Deficit with just a (Condition) that will return a boolean (True or False)
  return result;
}
checkCal(2500);
function checkCal(cal) {
  if (cal == calExpected) {
    console.log("Sustained");
  } else if (checkSurplus(cal)) {
    cal >= calExpected + calTolerance
      ? console.log("At risk of weight gain")
      : console.log("Surplus");
  } else {
    cal <= calExpected - calTolerance
      ? console.log("At risk of weight loss")
      : console.log("Deficit");
  }
}

// Play 04 - Using Math.floor() this time!
//
// Rules =
// Buy Price + 20% + Math.floor() = Sell Price
//

salePriceCalculator(15.83);

function salePriceCalculator(buyPrice) {
  let highMargin = (buyPrice *= 1.2);
  console.log(highMargin);
  let salePrice = Math.floor(highMargin);
  console.log(salePrice);
}

// Play 04 - Using Math.ceil() this time!6
//
// Rules =
// Buy Price + 50% + Math.ceil() = Sell Price
//

greedyPriceCalculator(15.83);

function greedyPriceCalculator(buyPrice) {
  let hugeMargin = (buyPrice *= 1.5);
  console.log(hugeMargin);
  let hugeSalePrice = Math.ceil(hugeMargin);
  console.log(hugeSalePrice);
}
