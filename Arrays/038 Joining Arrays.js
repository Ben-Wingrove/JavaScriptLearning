// Joining Arrays.
//
// use .join to join elements within an array

// use .split to seperate a string into elements in an array
// use .join to reassemble the elements with a given padding

const numbers = [1, 2, 3];

const joined = numbers.join(", ");
console.log(joined);

// Syntax Array.join(Seperator(Optional));

//(part of strings)
// Splits string into an array
const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

// Rejoins array back into a string
// joins message back together with - in between.
const combined = parts.join("-");
console.log(combined);
