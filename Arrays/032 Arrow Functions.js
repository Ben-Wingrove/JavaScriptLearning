// Arrow Functions

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// This is an easier way of writing out;

const course = courses.find(function (course) {
  return course.name === "a";
});
console.log(course);

// If code has a single perameter, can get rid of ( ) too.
// Ex function (courses, Sausages) =>
// Vs fuction  courses =>
// If no perameters, pass empty brackets
// Ex function (() =>)
// Vs function courses =>

const course = course.find((courses) => {
  return course.name === "a";
});
console.log(course);

// If function is single line of code, and is returning a value

const course = courses.find((course) => course.name === "a");

// Read as                 (Courses Goes to Courses.name = 'a')
console.log(course);
