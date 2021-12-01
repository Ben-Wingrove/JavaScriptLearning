// For loop
//
// Used to loop through a block of code a number of time

for (initialExpression; condition; incrementExpression) {
  statement / Action;
  statement2 / Action2;
}

//  InitialExpression   = declare the begining of the loop (let i = 0)
//  Condition           = set the operating condition, loop operates while true. stops when false.
//  IncrementExpression = amend the value of I after each loop. ++ or i+3 etc

// Statement/Action     = take this action each loop.

for (let i = 0; i < 5; i++) {
  console.log("hello world");
}

// Can insert conditional logic inside of a loop.
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
  // if The remainder of 1 / 2 is NOT== 0, then console log i.
}

// Can insert conditional logic inside of a loop. (from 5 to 1)
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
  // if The remainder of 1 / 2 is NOT== 0, then console log i.
}
