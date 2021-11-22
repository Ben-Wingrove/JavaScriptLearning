// Exercise 5
//
// Write function that shows all numbers between 0 and (Supplied number)
// Ensure that all numbers post "ODD" OR "EVEN"
//
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 !== 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
//
// Lesson 05;   each function within a function needs its own { }!
//              Create a constant, then log a constant. Rather than logging a result directly
//
// Play 05;
//
// Write function that shows all numbers between 0 and (Supplied number)
// Ensure that all numbers post 'Divisible by 3' or 'not'

showNumbers(30);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 3 === 0 ? "Divisible by 3!" : "Not";
    console.log(i, message);
  }
}

// Play 05;
//
// Write function that shows all numbers between 0 and (Supplied number)
// Ensure that all numbers post 'Yes Sir!' or 'No Sir!'
//
showNumbers(25);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 == 0 ? "Yes Sir" : "No Sir";
    console.log(i, message);
  }
}
