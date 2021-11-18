// Conditional Statements
//
//
//
//
//
// if...else

// if the (condition) evaluates to true
// then the statement will be executed

if (condition) {
  statement;
} else if (secondCondition) {
  secondStatement;
} else if (tenthCondition) {
  tenthStatement;
} else lastStatement;
//
//
//
//
//
//

let hour = 18;
// Exercise Example; Display Greeting
// If Hour is between 6am – 12pm : Good morning!
// If Hour is between 12pm – 6pm : Good afternoon!
// Otherwise : Good evening!

// If Hour is between 6am – 12pm : Good morning!
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
}
// If Hour is between 12pm – 6pm : Good afternoon!
else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
}
// Otherwise : Good evening!
else console.log("Good Evening");

// All together now!
let hour = 18;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else console.log("Good Evening");

// Solo Exercise; Display Week of Month
// If 1-7s-  show 1st week
// If 8-14 -  show 2nd week
// If 15-21 - Show 3rd week
// If 22-28 - Show 4th week
// If 29+ - Show 5th week

let calenderDate = 20;
if (calenderDate >= 1 && calenderDate <= 7) {
  console.log("Week 1");
} else if (calenderDate >= 8 && calenderDate <= 14) {
  console.log("Week 2");
} else if (calenderDate >= 15 && calenderDate <= 21) {
  console.log("Week 3");
} else if (calenderDate >= 22 && calenderDate <= 28) {
  console.log("Week 4");
} else console.log("Week 5");
//
//
//
//
//
//
// switch...case

// Switch case is Used to compare value of variable
// against other values String / Number / Boolean

switch (variable) {
  case "if variable = X": // If variable = X, then action
    console.log("Something ~ X!");
    break; // Break to stop code

  case "if variable = Y": // If variable = Y, then action
    console.log("Something ~ Y!");
    break;

  default:
    console.log("Neither X or Y.");
}
//
//
//
//
//
//

//Exercise example: Determine role of user
// Admin / Moderator / Guest / Unknown

// Must set user type in below line
let role;

switch (role) {
  // Check if <variable> is ....

  case "guest":
    console.log("Guest User");
    break;
  // ... set to guest, if so, print "Guest User"
  // then stop running this block of code.

  case "moderator":
    console.log("Moderator");
    break;
  // ... set to moderator, if so, print "Moderator"
  // then stop running this block of code.

  default:
    console.log("Unknown User");
  // ... is neither guest, nor moderator, print "Unknown User"
  // No need to break here, we're at the end of the block.
}

//all together now...
// Must set user type in below line
let role = "Carrot";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator");
    break;
  default:
    console.log("Unknown User");
}

// Can express the same code using if else...
let role = "Carrot";
if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");

//Solo Exercise example: What did you roll against a AC
//0 training dummy?

let diceRoll = "crit";
//miss
//crit

switch (diceRoll) {
  case "crit":
    console.log("Critical Hit!");
    break;

  case "miss":
    console.log("Critical Miss! You dropped your weapon!");
    break;

  default:
    console.log("Hit! Roll your damage!");
}

// Can express the same code using if / else if...
let diceRoll = "crit";
if (diceRoll === "crit") console.log("Critical Hit!");
else if (diceRoll === "miss")
  console.log("Critical Miss! You dropped your weapon!");
else console.log("Hit! Roll your damage!");
