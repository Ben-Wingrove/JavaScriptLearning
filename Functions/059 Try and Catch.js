// Try and Catch and Throw

// The try statement allows you to define
// a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a
// block of code to be executed, if an error occurs in the try block.

// The throw statement lets you create custom errors.

// Using example from last lesson
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //
    // .split is a method specifically for strings
    // If presented with boolean or null values, the method will break.
    //
    // To prevent this, we need to code in defensive measures to ensure
    // preventatives are in place to act before the code breaks.
    //
    // Error Handling; "Defensive Programming"

    // This if statement ensures that if the data provided
    // is anything other than a string, it will just return
    // to the top.
    // if (typeof value !== 'string') return;

    // But we dont want the error to go un-noticed!
    if (typeof value !== "string") throw new Error("Value is not a string.");
    //THROWING AN EXCEPTION

    //

    const parts = value.split(" ");
    // But we dont want the error to go un-noticed!
    if (parts.length !== 2)
      // If length of [parts] is not 2, throw exception
      throw new Error("Enter a first and last name.");
    //THROWING AN EXCEPTION

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "a";
} catch (e) {
  // e FOR EXCEPTION
  //CATCHING AN EXCEPTION
  alert(e);
  console.log(e);
}

console.log(person);
