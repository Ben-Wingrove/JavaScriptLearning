// Function Declarations vs Expressions
//

// Function Declaration
function walk() {
  console.log("walk");
}

// Named Function Expression (let or const)
let run = function run() {
  console.log("run");
};

// Anonymous Function Expression
let run = function () {
  console.log("run");
};
run();
