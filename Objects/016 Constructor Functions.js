// Constructor Functions are used to construct objects
// Much like factory functions, but have a totally different syntax
// (Works on Pascal Notation; OneTwoThree)
//

// Factory Function from Previous
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle5 = createCircle(5);
console.log(circle5);
// Can then call circle5.draw() method.
// This is really cool.

// Constructor Function example
function Circle(radius) {
  this.raduis = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

// 3 things occur behind the scenes during the new operator
// 1st : Creats Empty object (const x = {};)
// 2nd : Sets 'this' to point to the new Object
// 3rd : Return the object from the function

// In this instance; const circle = new Circle(1);
// 1 :  'new' Creates  x = {}
// 2 :  Then sets 'this' within Circle(Radius) to point to x = {}
// 3 :  Calculates + returns value of Circle(1)
