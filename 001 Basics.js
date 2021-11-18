// Basics
//
//
// Rules of Naming;
//1) Cannot be a reserved Keyword (Let, If, Else, Var… etc)
//2) Should be meaningful
//3) Cannot start with a number (1Carrot)
//4) Cannot contain Space or Hyphen (-)
//5) Names are case sensitive;
//Declare each variable on separate line
//
//
//
//
//
//
// Variable; Used to store data temporarly in computers memory
//
// IRL:		Stuff in Boxes (Each Box is labelled)
// Code:     Value assigned to Data in Variable
// (Label = Name of Variable)
//
//
//
//
// Declare a variable;
//
//

let xxx = "xxx";

//
//
//
//
//

// Exercise Example: Name
let name = "Mosh";
//Let variable (name) = 'Mosh' .
console.log(name);
//Log the information held within variable (name)

// all together now
let name = "Mosh";
console.log(name);

//
//
//
//
//
// Declare a constant (Something that wont change - like Pi)
//
//

const xxx = "xxx";

//
//
//
//
//
// Exercise Example: Interest Rate
//
const interestRate = 0.5;
// Set constant value of interestRate to 0.5.
interestRate = 1;
// Attempt to set value of interestRate to 1.
console.log(interestRate);
// Show value of interestRate; Shows error
//
//
//
// All together now
const interestRate = 0.5;
interestRate = 1;
console.log(interestRate);
//
//
//
//
//
//
//
//  Primative Types  (Value Types)
//  Strings / Numbers / Boolean / undefined / null / Symbol
//
//
let name = "Mosh"; // String Literal (A Literal String of text)
//
let age = 30; // Number Literal (A literal number) (30 or 30.5 still a number)
//
let isApproved = true; // Boolean Literal (True or False)
//
let firstName = undefined; // Effects value also type
//
let lastName = null; // Used to Explicitly clear the value of variable
//                                  (Sets type to object)
//Last primitive SYMBOL
//
//
//
//
// JavaScript is a Dynamic Language ~
//                  the type of a value can change at run time
//
//  typeof name                         // shows as "string"
//  (Check the type of name)
//  name = 1                            // Assign the value of 1
//  typeof name                         // shows as "number"
//  (Check the type of name once more)
//  typeof isApproved                   // shows as "boolean"
//  (Check the type of isApproved)
//  typeof firstName                    // shows as "undefined"
//  (Check the type of firtName)
//  typeof lastName                     // shows as "object"
//  (Check the type of lastName)
//
//
//
//
//
//
//  Reference Types
//  Object  Array   Function
//
//
//
//
//
//
//
//
//  Object Literal {}
//
//               Like an object IRL.
//  A phone has multiple stats; width, height, battery life, etc
//  a JavaScript Object has multiple properties
//  Instead of calling each variable, we can simply call one object.
//
//

let object = {
  variable1: "xxx", // , is required after each item in list
  variable2: "yyy",
};

//
//
//
//
//
//
//Exercise Example: person
let person = {
  name: "Mosh",
  age: 30,
};

console.log(person);

//
//
//
// Can change names 2 ways; Dot Notation + Bracket Notation
//
//  Dot Notation - Can also Read Value of a property (Shorter)
person.name = "John";
//
console.log(person.name);
//
//  Bracket notation - Can find name of property
//                      without actually knowing property
let selection = "name";
person[selection] = "Mary";
//
console.log(person.name);
//
//
//
//
//
//
//  Array Literal []
//                  used to store lists of elements of various types
//                  Array is type: Object
//
//
let VARIABLE = ["item1", "item2", "item3+"];
console.log(VARIABLE);
//
//
//
//
//
//
//
//
// Exercise Example: Colors
let selectedColors = ["red", "blue"];
// Declare the Array 'selctedColors' consists of [red , blue]
console.log(selectedColors);
// Log the elements within the array 'selectedColors'
//  (Shows length of 2 - Index 0: 'red', Index 1: 'blue')
//
// How to show an element within an array using index
// Simply add [x] (The number of the index you want to look up)
console.log(selectedColors[0]);
//
// Can add to array in extra lines
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
// Add to selectedColors @ Index position [2] = 'green'
console.log(selectedColors);
//
// Used to find the amount of elements in an Array (the length)
console.log(selectedColors.length);
//
//
//
//
//
//
// Function ( )
//
//
function NAME(Parameter, Parameter) {
  // Body of Fuction; Add logic here
  Statemement;
}
// Once created; Functions need to be called, as such:
NAME(Arguement, Arguement);
//
//
//
//
//
//
//
//Exercise Example; Greeting (Performing a Task)
function greet(name, lastName) {
  //  name = Parameter = value at time of declaration
  //  This name that is only accessable inside of this function
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");
//  John = Arguement = actual value supplied
//  Function says greet(name) - Later call says no greet('John')
greet("Mary", "Smarty");
//
//
// Solo Exercise; Conversation Simulator
function greet(name) {
  //Make Function called <greet> it will greet (name)
  console.log("Hello Mr " + name);
  //Print "Hello Mr " + name
}
function ask(name) {
  console.log("How are you, Mr" + " " + name + "?");
}

greet("Ben");
// Execute the function greet, replace (name) with "Ben"
ask("Ben");
// Execute the function ask, replace (name) with "Ben"
//
//
//Exercise Example; Square (Calculating a Value)
function square(number) {
  // Function called Square works on (number)
  return number * number;
  //Return back to provider number * number
}
console.log(square(3));
//Print "3 * 3" to log
//
//
// Solo Exercise; 9 Times Table Machine
function nineTimesTable(number) {
  //Function called nineTimesTable works on (number)
  return number * 9;
  //Return to provider number * 9
}
console.log(nineTimesTable(2));
//Print 2 * 9
//
//
//
//
//
//
//
////
////
////
////
////
////
////
////
//
