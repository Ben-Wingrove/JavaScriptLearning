// Do...While
//
// used to loop through a block of code while a specified condition is true
// Will loop through code once, even if condition is false.

initialExpression;
do {
  // Do the below code
  if (conditional - logic) action();
  // If condition-logic is true, take action
  incrementExpression;
  // increment the intial expression
} while (condition);
// If this while condition is true, the code run again

//  InitialExpression   = declare the begining of the loop (let i = 0)
//  Condition           = set the operating condition, loop operates while true. stops when false.
//  IncrementExpression = amend the value of I after each loop. ++ or i+3 etc

// Statement/Action     = take this action each loop.

let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// The do-while loop above will operate exactly as the while loop below.

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
