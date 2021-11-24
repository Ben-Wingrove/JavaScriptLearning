// Cloning an Object.
//
// Cloning an Object can be done in 3 ways.
// Lets clone the circle object below

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// Example 1; Works but its long and outdated
const another = {}; // Another = Object

for (let key in circle) // Loop; Keys in Circle
  another[key] = circle[key]; //  another [Keys Within] = circle[Keys Within]

console.log(another); // Log another
// Shows { radius: 1, draw: [Function: draw] }

// Example 2; Object.assign
Object.assign({}, circle);
// Assigns the contents of our object (or multiple objects)
// to the empty object  (or a target object)
// can be used to combine, or clone
const another = Object.assign({}, circle);
// Which ofcourse needs to be declared as a seperate thing
// This one line of code (27) is equivelant to
// the six  lines of code (16 - 19) above.

// Example 3; Spread operator
const another = { ...circle };
// ... takes all properties and methods in the object
// and puts them inside of the curly braces {}
// used only to clone
console.log(another);
