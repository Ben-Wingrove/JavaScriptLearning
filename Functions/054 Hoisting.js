// Hoisting
// Process of moving function declarations
// to the top of the file

// Function Declaration
walk();

function walk() {
  console.log("walk");
}

// Function Expression

let run = function () {
  console.log("run");
};

run();
