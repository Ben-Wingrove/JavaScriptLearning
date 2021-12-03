//Sorting Arrays
//

// Sorting Numbers / Strings

const numbers = [2, 3, 1];
// Converts each number into a string
// Then sorts elements in the array
numbers.sort();
console.log(numbers);
// Array prints as 1, 2, 3.

// Reverses the order of elements in an array
numbers.reverse();
console.log(numbers);
// Array prints as 3, 2, 1... The reverse of the sorted array above.

// Need extra work for Objects...

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript.js" },
];
courses.sort();
console.log(courses);
// .sort compares A and B, if they're in the right order, it'll skip.

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript.js" },
];
courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);
// This works great!
// If an object had a lowercase name, it'd be different ASCII value
// Lets remove the Case-Sensitivity.
// (Make it all lower or upper case)

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript.js" },
];
courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase(); // or .toLowerCase();
  const nameB = b.name.toUpperCase(); // or .toLowerCase():

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
