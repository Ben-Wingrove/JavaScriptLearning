// Exercise 5
// 
// Write function that shows all numbers between 0 and (Supplied number)
// Ensure that all numbers post "ODD" OR "EVEN"

showNumbers (10); 

function showNumbers(limit) {
}

// Step 1; visualise logic 
showNumbers (10); 
function showNumbers(limit) {
if even post "EVEN"
else post "ODD"
}
// Step 2; Condense Logic
showNumbers (10); 
function showNumbers(limit) {
if (number = even) post "EVEN" : post "ODD"
}
//Would work on a single number... oh darn its a For loop...
// 
// Step 3; make a for loop 
for (let i = 0; i <=limit; i++) {
  console.log(i);
}
// Step 4; Put for loop in function.
showNumbers (10); 
function showNumbers(limit) {
  for (let i = 0; i <=limit; i++)
  if (i % 2 !==0) console.log(i + ' ' + "EVEN")
  else console.log(i + ' ' + "ODD")
}
// Works well! 
// What about condensing the if/else statement?
// Step 5
showNumbers (10); 
function showNumbers(limit) {
  for (let i = 0; i <=limit; i++)
  (i % 2 !==0) ? console.log(i + ' ' + "EVEN") : console.log(i + ' ' + "ODD")
}
// AAAAnd we're done! 

// Feedback
// Good attempt; Take the console.log out of the results 
// Declare the results as a const, then post the const. 

// Step 6 - With Feedback - Dont forget the extra { }!
showNumbers (10); 
function showNumbers(limit) {
  for (let i = 0; i <=limit; i++) {
  const message = (i % 2 !==0) ? "EVEN" : "ODD"
  console.log(i, message);
  }
}


//Taught Example; 
//Step 1 
showNumbers (10); 

function showNumbers(limit) {
}
//Step 2 - add for loop 
showNumbers (10); 
 
function showNumbers(limit) {
  for (let i = 0 ; i<= limit; i++) {

  }
}
// Step 3 - Add if / else logic
// (condition is true, log even, if else false.)
showNumbers (10); 
 
function showNumbers(limit) {
  for (let i = 0 ; i<= limit; i++) {
    if ( i % 2 === 0) console.log (i, 'EVEN');
    else console.log (i, "ODD");
  }
}
//Step 4 - consesne if / else logic 
//       - lnto conditional logic  
showNumbers (10); 
 
function showNumbers(limit) {
  for (let i = 0 ; i<= limit; i++) {
     const message = ( i % 2 === 0) ? "EVEN" : "ODD"
    console.log(i, message);
  }
}
