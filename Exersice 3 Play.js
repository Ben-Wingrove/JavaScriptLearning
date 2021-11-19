// Exercise 03
// Create the fizzBuzz algorithm
// Rule 1; if input / 3 = Fizz
// Rule 2; if input / 5 = Buzz
// Rule 3; if input is /3 + /5 = FizzBuzz
// Rule 4; if not divisible by 3 or 5 = input
// Rule 5; If input not a number  = NaN
//
//

const output = fizzBuzz("post");
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  // Check if typeof input IS NOT EQUAL TO 'number' ~ if true return NaN
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  // Check if input is Divisible by 3 + Divisible by 5 - if so Return FizzBuzz
  else if (input % 3 === 0) return "Fizz";
  // Check if input is Divisible by 3; if so return Fizz
  else if (input % 5 === 0) return "Buzz";
  //Check if input is dividsible by 5; if so return Buzz
  else return input;
  // If all else fails, return the input.
}

//
//
//
// Play 03
// Create a Coin Sorter algorithm
// Rule 0; If input not 1 , 2 , 5 , 20, 50, 100, 200 = Throw error
// Rule 1; if input <5 = Shrapnel Received
// Rule 2; if input <100 = Silvers Received
// Rule 3; if input =100 = Quids In!
// Rule 4; if input =200 = Waheyyy! We're in the Monaay!
// Rule 5; If input not a number  = NaN
//
// Incorrect code - Works tho + Fun to play with though

const output = coinSorter("Sock");
console.log(output);

function coinSorter(input) {
  if (input == 1) return "1p Received";
  else if (input == 2) return "2p Received";
  else if (input == 5) return "5p Received";
  else if (input == 10) return "10p Received";
  else if (input == 20) return "20p Received";
  else if (input == 50) return "50p Received";
  else if (input == 100) return "100p Received";
  else if (input == 200) return "200p Received";
  else if (typeof input == "number") return "Error - Unidentified coin";
  else return "Error - Thats not even a coin!";
}

// This only identifies Coin by coin...
// I wanted something that will take whatever its given

// Play 03 - Attempt 2!
// Create a Coin Sorter algorithm
// Rule 0; If input not 1 , 2 , 5 , 20, 50, 100, 200 = Throw error
// Rule 1; if input <5 = Shrapnel Received
// Rule 2; if input <100 = Silvers Received
// Rule 3; if input =<100 = Quids In!
// Rule 5; If input not a number  = NaN
//
const output = coinSorter(55);
console.log(output);

function coinSorter(input) {
  if (typeof input !== "number") return "Not a Coin!";
  else if (input === 1 || input === 2) return "Shrapnel Received!";
  else if (input === 5 || input === 10 || input === 20 || input === 50)
    return "Silver Received!";
  else if (input === 100 || input === 200) return "Gold Received!";
  else return "Whoa, one at a time, please!";
}
