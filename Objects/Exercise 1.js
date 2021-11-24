// Exercise 1
// Create address object with 3 properties
// street
// city
// zipCode
// create function called x that shows all objects, and values
// showAddress(address)

//Attempt 1

const address = {
  street: "Lincon Street",
  city: "US OF A ",
  zipCode: "1231232",
};

showAddress(address);

function showAddress(input) {
  console.log(input);
}

// Feedback
// Good first attempt - totally missed the For In loop (add that)
// You created a second variable, input for some reason? not needed. (replace input with address)

//Attempt 2
const address = {
  street: "Lincon Street",
  city: "US OF A ",
  zipCode: "1231232",
};

showAddress(address);

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

// Taught Attempt
// Step 1; Declare object as variable or const
let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

// Step 2; Declare function that takes address object
//function showAddress(address){
//
//}
//Step 3; use For In loop to enumerate the properties of object
function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);
