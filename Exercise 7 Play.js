//Exercise 7
//
// Create a function - called showProperties
// Pass an object, the function should show all properties
// Within the object that..
// .. are of type string

//Should show "title Horror Show" + "director McDirector"
const movie = {
  title: "Horror Show",
  releaseYear: 2020,
  rating: 9,
  director: "McDirector",
};

showProperties(movie);

function showProperties(obj) {
  for (let keyDetails in obj)
    if (typeof obj[keyDetails] === "string")
      console.log(keyDetails, obj[keyDetails]);
}

//
// Lesson 07; obj[keyDetails] Is read as "Show keyDetails WITHIN THE obj"
//

//
// Play 07;
//
// Create a function
// Pass an object, the function should show all properties
// Within the object that are of type number

// 1; Create For In Loop
// 2; Add console.log to loop (to show variables) + (to show values)
// 3; Add if typeof logic
// 4; Dont forget we're looking for, if the type of numberValues WITHIN our object is 'number' not if numberValues contain a number

const movie = {
  title: "Horror Show",
  releaseYear: 2020,
  rating: 9,
  director: "McDirector",
};

showProperties(movie);

function showProperties(obj) {
  for (let numberValues in obj)
    if (typeof obj[numberValues] == "number")
      console.log(numberValues, obj[numberValues]);
}

// Play 07;
//
// Create a function
// Pass an object, the function should show all properties
// Within the object that are of type boolean
//
// The policies within a workplace

const policy = {
  title: "Cheif Scrubber",
  fair: true,
  equitable: false,
  just: true,
  pay: 11,
};

showProperties(policy);

function showProperties(obj) {
  for (let singlePolicies in obj)
    if (typeof obj[singlePolicies] === "boolean")
      console.log(singlePolicies, obj[singlePolicies]);
}

// Play 07;
//
// Create a function
// Pass an object, the function should show all properties
// Within the object that are of type undefined
// 1;For In
// 2;Show me
// 3;If logic

const policy = {
  title: "Cheif Scrubber",
  fair: undefined,
  equitable: NaN,
  just: 0,
  pay: undefined,
};

showProperties(policy);

function showProperties(obj) {
  for (let variables in obj)
    if (typeof obj[variables] === "undefined")
      console.log(variables, obj[variables]);
}
