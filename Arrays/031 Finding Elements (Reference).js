// Finding Elements (Reference)
//
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// Duplicate Line; Alt + Shift + DOWN ARROW

//
console.log(courses.includes({ id: 1, name: "a" }));
// Returns False...
// Reference types need to be searched differently~

// Syntax; array.find(function(currentValue, index, arr),thisValue)
// Syntax; array.fund(function())
//Function()     ~  A function to run for each array element.
//                 (Predicate ~ determines if element exists before runing)
//currentValue  ~   The value of the current element.
//index          ~  The index of the current element. (optional)
//arr           ~   The array of the current element. (optional)
//thisValue     ~ A value passed to the function as its this value. (optional)

// Ex 1;
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);
// Looks for an /(the first) Element that is => 10
console.log(found);
// This will log 12.
// If nothing is => 10, it will return undefined.

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// constant "course" = Array.find(Function(Element) {
//     return Array.property === 'a' ;
// });
// console log constant called "course"
const course = courses.find(function (course) {
  return course.name === "a";
});
console.log(course);
// Returns     {id: 1, name: 'a' },

// .find() will return the first element that matches the given criteria

// .findIndex() operates simlarly, but returns the index value of said element.

// constant "course" = Array.findIndex(Function(Element) {
//     return Array.property === 'a' ;
// });
// console log constant called "course"
const course = courses.findIndex(function (course) {
  return course.name === "a";
});
console.log(course);
// Returns 0. The index position of "{id: 1, name: 'a' }"
