// While loop
//
// Used to loop through a block of code while a specified condition is true
//

initialExpression;
while (condition) {
  // If this while condition is true, the code below will run
  if (conditional - logic) action();
  // While logic = true, action will be taken
  incrementExpression;
}

//  InitialExpression   = declare the begining of the loop (let i = 0)
//  Condition           = set the operating condition, loop operates while true. stops when false.
//  IncrementExpression = amend the value of I after each loop. ++ or i+3 etc

// Statement/Action     = take this action each loop.

let i = 0;
while (i <= 5) {
  // While true, continue
  if (i % 2 !== 0) console.log(i);
  i++;
}
