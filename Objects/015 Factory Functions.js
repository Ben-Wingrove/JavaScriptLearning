// Factory Functions.
// (Work on Camel Notation; oneTwoThree)
//
// Factory functions produce Objects
// Literally, we set up factory functions
// to spit out different objects using the same logic.

//Example
//We wanna create a shed of circles, of all different sizes/
//But we're not gonna code each and every bloody object, no way!
//And we're not gonna copy and paste all of the bugs etc
// We're gonna make a factory!!!

// Start with Basics;
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisable: true,
  draw: function () {
    console.log("draw");
  },
};

// Slap it in our createCircle factory, (Add return to visualise)
function createCircle() {
  const circle = {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisable: true,
    draw: function () {
      console.log("draw");
    },
  };
  return circle;
}

// Remove the constant, just return this code
// But atm this circle factor is hard-coded for Radius=1 circles
function createCircle() {
  return {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisable: true,
    draw: function () {
      console.log("draw");
    },
  };
}

// remove the hard coding
// Get rid of other variables for ease of understanding
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// if Key and Value are the same, we dont need to repeat it.
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Don't need to declare functions inside of an object.
// And with that, our pretty factory is ready to poop out circles.
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
