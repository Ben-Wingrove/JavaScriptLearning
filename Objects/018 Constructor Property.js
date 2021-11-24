// Constructor Property
// Every object has a contstructor property that references
// the function that was used to create that object
// (where it came form)

//

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

// circle5.constructor
// shows "ƒ Object() { [native code] }"

// When we code:            let x = ();
// JS engine will create    let x = new Object();
