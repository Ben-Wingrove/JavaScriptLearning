// Exercise 2
// Using the details of Exercise 1,
// 1)Write factory function
// 2)Write constructor function
// to initialize an address object

// LESSON 2; KEY:VALUE relationship
// 1st refered to as Key, 2nd refered to as Value
// Key = city, Value = US OF A

const address = {
  street: "Lincon Street",
  city: "US OF A ",
  zipCode: "1231232",
};

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
const address1 = createAddress("Home", "The Big", "123456");
console.log(address1);

// Feedback; Line 22 "    zipCode," removed "," last character
// Otherwise perfect!

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("sofa", "hawk", "123321");
console.log(address1);

// Feedback; Perfect!
