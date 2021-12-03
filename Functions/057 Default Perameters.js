// Default parameters
//
// Can supply default parameters to functions.
// Caveat ~
// If supplying default value for one,
// make sure its at the back
// If supplying default value for one...
// supply a default value for all.

// Old style
// change variables inside function to
// years = years (if true) || 5 (if false /default)

function interest(cashValue, interestRate, years) {
  interestRate = interestRate || 3.5;
  years = years || 5;

  return ((cashValue * interestRate) / 100) * years;
}
console.log(interest(10000));

// Functions same as below
// New style

function interest(cashValue, interestRate = 3.5, years = 5) {
  return ((cashValue * interestRate) / 100) * years;
}
console.log(interest(10000));
