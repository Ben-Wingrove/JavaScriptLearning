//
//
//
// Loops;
//
//
//
//
//
// For Loop ; Used for repeating action a number of times
//
//
//
for (initialExpression; condition; incrementExpression) {
  statement;
}
//
//
//
//  initialExpression   ; Set the context for where loop begins
//  condition           ; Set the operating condition for the loop
//  incremenetExpression; Set the change in value from loop to loop
//
//  The i variable is short for Index;
//  Common to use in for loops: Called the Loop Variable
//
//
//
//
//

//Exercise Example; print Hello World x5 times
//
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}
//
// for (To begin, declare i = 0;
//              operate while i > 5 is true;
//                  after each loop, i++ (increment value by 1) ;
//  Log to console "Hello World"
// }
//1st loop – I = 0, +1 to I
//2st loop – I = 1, +1 to I
//3st loop – I = 2, +1 to I
//4st loop – I = 3, +1 to I
//5st loop – I = 4, +1 to I
//6st loop – I = 5, condition met, end loop.
//
//
//Exercise Example; print odd numbers from 0 to 5
//
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}
// for (To begin, declare i = 0;
//              operate while i Lessthan or equal to 5 is true;
//                  after each loop, i++ (increment value by 1) ;
//  If ( i (The remainder of i) Divded by 2 == (DOES NOT equal 0)...
// ... Then Log the value of i to console.
//
//1st loop – I = 0, +1 to I
//2st loop – I = 1, +1 to I		        Prints 1
//3st loop – I = 2, +1 to I
//4st loop – I = 3, +1 to I             Prints 3
//5st loop – I = 4, +1 to I
//6st loop – I = 5, +1 to I             Prints 5

//Conditions false, end loop.
//
for (let i = 5; i >= 5; i--) {
  if (i % 2 !== 0) console.log(i);
}
// for (To begin, declare i = 5;
//              operate while i Lessthan or equal to 5 is true;
//                  after each loop, i-- (decrement value by 1) ;
//  If ( i (The remainder of i) Divded by 2 == (DOES NOT equal 0)...
// ... Then Log the value of i to console.
//1st loop – I = 5, -1 to I 				Prints 5
//2st loop – I = 4, -1 to I
//3st loop – I = 3, -1 to I 				Prints 3
//4st loop – I = 2, -1 to I
//5st loop – I = 1, -1 to I 				Prints 1

// Solo Exercise; Log every even / odd number until 10

for (let i = 0; i <= 10; i++) {
  // For ( Declare i = 0;
  // Operate while i is lessthan or equal to 10;
  // increment value of i by 1 each loop
  if (i % 2 !== 0) console.log(i, "ODD");
  // if ( i (The remainder of i) Divded by 2 does NOT equal 0) [is true]
  // then log to the console- the value of i, and the string "ODD"
  else console.log(i, "EVEN");
  // Otherwise log to the console - the value of i, and the string "EVEN"
}

// All together now...
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) console.log(i, "ODD");
  else console.log(i, "EVEN");
}
//
//
//
//
//
//
//
//
// While loop (Loop variable needs to be declared externally)
//  External i variable, and the Internal i variable are
//              DIFFERENT VARIABLES WITH SAME NAME
//
//
//

while (Condition) {
  Statements;
}

//
//
//
//
//  initialExpression   ; Set the context for where loop begins
//  condition           ; Set the operating condition for the loop
//  incremenetExpression; Set the change in value from loop to loop
//
//
//
//
//
//
//
//Exercise Example; print odd numbers from 1 to 5
let i = 0;
// Begin with the initialExpression externally
// Declare that i = 0
while (i <= 5) {
  // Set up the while loop with the condition
  //( i > 5 is true)
  if (i % 2 !== 0) console.log(i);
  // add the statement
  // If ( i (The remainder of i) Divded by 2 == (DOES NOT equal 0)...
  // ... Then Log the value of i to console.
  i++;
  // add the incrementExpression
  // That adds value of 1 to i after each loop
}
//

// All together now...
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
//
// Solo Exercise; 3 Times table
//
let i = 0;
// external initialExpression - declare i = 0
while (i <= 30) {
  // while (Condition i lessthan or equal to 30 is true) {Perform
  console.log(i);
  // Log to the console the value of i
  i += 3;
  // Increase the value of I by +3
}
//
//
// All togethger now.
let i = 0;
while (i <= 30) {
  console.log(i);
  i += 3;
}
//
//
//
//
//
//
//
//
//
// Do...while loop ; Used for repeating action a number of times
//    Do...while loops are always executed once
//    Even if condition is false!
//

do {
  Statements;
} while (Condition);

//
//
//
//
//
//
//
//  initialExpression   ; Set the context for where loop begins
//  condition           ; Set the operating condition for the loop
//  incremenetExpression; Set the change in value from loop to loop
//
// Exercise Example; Convert print odd numbers from 1 to 5 to Do While
// The two are gramatically different -
// while checks before acting
// do... while checks after acting
//
let i = 0;
// initialExpression - declaration
while (i <= 5) {
  // condition          - If true, continue.
  if (i % 2 !== 0) console.log(i);
  ~(
    // Statement          - do the thing
    i++
  );
  // incremenetExpression- Change the value to prevent infinite loop
}
//

let i = 0;
// initialExpression - declaration
do {
  if (i % 2 !== 0) console.log(i);
  // Statement          - do the thing
  i++;
  // incremenetExpression- Change the value to prevent infinite loop
} while (i <= 5);
// condition          - If true, continue.
//
//
// All together
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
//
//
//
//
//
//
//
//
//
//
//
// Infinite Loops
//
//          If you mess up and forget to close a loop
//          IT WONT CLOSE ITS SELF.
//
//
//
//
//
//
//
//
//
//
//
// For...in loops. 
//    Used to iterate over the properties of an object 
//    Used to access each property and value of an object without 
// 	  without knowing the name of the specific property
//
//
//

For (declare variable in object) {
  (Statements)
}

//
//
//
//
//
//
//
//
//
// Exercise example; accessing Personal data without knowing 
//                   what we are looking for 
//
// Lets declare an Object, call it person 
// Pretend we cant see the variables inside person ATM
const person = {
  name: "Mosh",
  age: 30
};
// 
for ( let stats in person)
// Begin a loop (Declare variable (stats) in  object (person))
//          Each loop our variable will hold a name of a property 
console.log(stats);
//          Log what our variable (stats) sees!
//          1st Loop shows name, 2nd loop shows age. 

// What if we want to see the value of the properties too?
//
// Dot Notation - person.name (for when we know what to look for)
// Bracket notation - person['name'] (for when we don't)
//
//
// Declare a constant to practice on
const person = {
  name: "Mosh",
  age: 30
};
//
for ( let stats in person)
// Begin a loop (Declare variable (stats) in  object (person))
//          Each loop our variable will hold a name of a property 
console.log(stats, person[stats]);
//          Log what (stats) sees, (<as well as)
//          Log what(stats) sees within person! 
//          1st Loop shows name "Mosh", 2nd loop shows age 30. 
//
// All together now!
//
const person = {
  name: "Mosh",
  age: 30
};
//
for ( let stats in person) 
console.log(stats, person[stats]);
//
//
//

// Solo Exercise
// Show me the what you've caught!
// Declare a constant to practice on
const pokemon = {
  name: "Pikachu",
  level: 50,
  type: "Eletric",
  nature: "Feisty"
};

for (let status in pokemon)
console.log (status, pokemon[status]);


// All together now!
const pokemon = {
  name: "Pikachu",
  level: 50,
  type: "Eletric",
  nature: "Feisty"
};

for (let status in pokemon)
// Begin a loop (Declare variable (status) in  object (pokemon))
//          Each loop our variable will hold a name of a property 
console.log (status, pokemon[status]);
//          Log what (status) finds, (<as well as)
//          Log what [status] finds specifically within pokemon 
//
//
//
//
//
//
//
//
//
//
//
// For...of Loop
//        Used to iterate over elements (or items) in an array
//
//
//
//
//

For (variable of array) {
  (Statements)
}

//
//
//
//
//
// Exercise example; Colors 
//
// Step 1'; Create a constant array [list] to refernce
const colors= ['red','green', 'blue'];
//
//
for (let color of colors)
// Begin a loop (Declare variable (color) of array [colors])
// Each loop our variable will hold a name of an element
 console.log(color);
// Log what (color) sees
//
//
//
// Solo Example; Wheels on a car
//
// Step 1 declare a constant array to play with
const wheels= ['Front Left', 'Front Right', 'Rear Left', 'Rear Right'];
//
for (let location of wheels) 
// Begin a loop (Declare variable (location) of array [wheels])
// Each loop our variable will return a name of an element
console.log(location)
// Log what (location) sees
//
//
//
//
// All together now! 
const wheels= ['Front Left', 'Front Right', 'Rear Left', 'Rear Right'];
for (let location of wheels) 
console.log(location);
//
//
//
//
//
//
//
//
//
//
//
// Loop Breaks
//              add break;
//              to stop code in its tracks change behaviour of code 
//
//
//              add continue;
//              to make code start again from the top 
//
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// Prints 0 - 10 easy peasy

let i = 0;
while (i <= 10) {
  if (i === 5 ) break;  
  console.log(i);
  i++;
}
// Prints 0-4 then loop stops 

let i = 0;
while (i <= 10) {
  if (i % 2 === 0 ) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
// Prints 1,3,5,7,9