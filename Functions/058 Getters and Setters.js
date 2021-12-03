// Getters and Setters
//

// Getters are used to Access properties inside objects
// Syntax get FUNCTION() {},

// Setters are used to mutate properties inside objects
// Syntax set FUNCTION() {}

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};
console.log(person.fullName());

// Easier to repeat     console.log(person.fullName());
// rather tham          console.log(`${person.firstName} ${person.lastName}`);
// Issues - Method (fullName()) is Read only / unchangable written like this.

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    // get enables method (fullName()) to be accessed like a property
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    // set enables method (fullName()) to be set outside of the object
    // (value) refers to anything that is given...
    // Ex~ person.fullName = 'John Smith';~ the string 'John Smith' is value here.
    const parts = value.split(" ");
    // This line splits the value string into an array of elements.
    this.firstName = parts[0];
    // This.firstName line assigns value the element of [parts] at index 0, as firstName
    this.lastName = parts[1];
    // This.lastName line assigns value the element of [parts] at index 1, as LastName
    // this.xx points to the owner of the object (one curly brace back in the heirarchy)
  },
};

person.fullName = "John Smith";

console.log(person);
