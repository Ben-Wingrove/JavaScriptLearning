// Primitives (Value) vs Reference types.
// These two different categories of types behave differently.
// Primitives are copied by their value
//
// Objects are copied by their reference
//
//      Primitives
//      (Value)             Reference

//      Number              Object
//      String              Function    (Also an Object)
//      Boolean             Array       (Also an Object)
//      Symbol
//      Undefined
//      Null

// Example 1;
// Declare Primitives;
let x = 10; // X as 10
let y = x; // Y as X ( Y = 10)

x = 20; // X change to 20
//                 Y still = 10

// The values are stored in the variables,
// they are completely independant.

// Declare References;
let x = { value: 10 }; // X as 10
let y = x; // Y as X ( Y = 10)

x.value = 20; // X change to 20
//                         Y change to 20 too

// the values are stored outside of the variable,
// the variable knows where to look for the information
// In this case, X and Y are refering to The object {value:10};
// for information, any changes to the object
// will effect the variables referencing them.

// Example 2;
// Declare Primitives;

let number = 10; // OUTSIDE

function increase(number) {
  //INSIDE
  number++;
}

increase(number);
console.log(number);

// number(outside) and number (inside) are different variables
// Both of these are primitives, they are valued independently.
// number (outside) is copied to number (inside)
// number (inside) is added to, then forgotten about.
// number (outside) is logged

// Example 2;
// Declare Reference;   (Rename Number to Object)

let object = { value: 10 };

function increase(object) {
  object.value++;
}

increase(object);
console.log(object);

// object = {value:10}; and Object.value++;
// Are both referencing the same object
// Both of these are references, they are valued together.
// object is referenced inside the function (With the {value:10};)
// object.value++ is referenced again, and added to.
// then the new value of object is logged.
// there is no inside and outside.
