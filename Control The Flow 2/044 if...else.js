// If...Else
// Conditional Statement

// Hour
// If hour is between 6am and 12 pm : show Good Morning!
// if hour is between 12pm and 6pm: show Good Afternoon!
// otherwise Good evening!

if (condition) {
  statement;
} else if (anotherCondition) {
  statement;
} else if (asManyContionsWeLike) {
  statement;
} else statement;

// Step 1 - Declare
let hour = 13;
// Step 2 - Compare hour with given times
// IF (HOUR morethanORequalto AND HOUR lessthan 12) is true ~
if (hour >= 6 && hour < 12) {
  // Then...
  console.log("Good Morning!");
}
// Step 3 - Next comparson
// IF (condition) is true ~
else if (hour >= 12 && hour < 18) {
  // Then...
  console.log("Good Afternoon!");
}
// Step 4 - Failsafe / Backup
// Otherwise ~
else console.log("Good Evening!");

// Step 5 - Put it all together - Trim extra {}

let hour = 13;
if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good Evening!");
