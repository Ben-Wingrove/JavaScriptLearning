// Functions are Objects!
//

function Circle(radius) {
  this.raduis = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

//Circle.<member>
Circle.length;
Circle.toString;
// Yellow icons = Methods
// Blue icons = Properties

Circle.call({}, 1); // ===  const circle = new Circle(1);
// Need to pass empty object, then singular arguements, by arguements .
// empty object { } will gather information from 'this'

Circle.apply({}, [1, 2, 3]);
// Need to pass empty object, then an array arguement.
// empty object { } will gather information from 'this'
