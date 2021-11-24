// Exercise 3
// Using the Constructior function we created in Exercise 2,
// Create 2 address objects.
// Create 2 functions
// 1; areEqual (address1, address2) {}
// To (Check if objects are equal) ===
// checking if the objects have same refernce
// need to check that all their properties are equal
// 2; areSame (address1, address2) {}
// Tells us if address1 and address 2 are referencing
// the same object or not

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

//Construtor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}
// Returns boolean value of whether the street + city + zipCodes
// are all the same on address 1 and address 2

function areSame(address1, address2) {
  return address1 === address2;
}
// returns boolean value of whether address 1 and address 2
// are the same object or not.

console.log(areEqual(address1, address2));
// Returns true
console.log(areSame(address1, address2));
// Returns false
