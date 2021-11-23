// Exercise 7
//
// Create a function - called showProperties
// Pass an object, the function should show all properties 
// Within the object that..
// .. are of type string

//Should show "title Horror Show" + "director McDirector"

const movie = {
    title = 'Horror Show',
    releaseYear= 2020,
    rating=9, 
    director='McDirector'
}

showProperties(movie);

function showProperties(obj) {

}

// Attempt 1 - Not a clue how to do this... 
//Step 1; Consult Notes

// For...in loops. 
//    Used to iterate over the properties of an object 
//    Used to access each property and value of an object without 
// 	  without knowing the name of the specific property
//
//
//
For (declare variable in object) {
    (Statements)
  }
//
// Exercise example; accessing Personal data without knowing 
//                   what we are looking for 
//
// Lets declare an Object, call it person 
// Pretend we cant see the variables inside person ATM
const person = {
    name: "Mosh",
    age: 30
  };
  // 
  for ( let stats in person)
  // Begin a loop (Declare variable (stats) in  object (person))
  //          Each loop our variable will hold a name of a property 
  console.log(stats);
  //          Log what our variable (stats) sees!
  //          1st Loop shows name, 2nd loop shows age. 

// returning type rather than value 
for ( let stats in person) 
console.log(stats, person[stats]);
//
//

// Step 2;  for in loop - Log prints all variables 
const movie = {
    title : 'Horror Show',
    releaseYear : 2020,
    rating :9, 
    director :'McDirector'
}

showProperties(movie);

function showProperties(obj) {
    for (let properties in movie)
    console.log(properties)
}

// Step 3;  add log to print value of variables within [properties]
const movie = {
    title : 'Horror Show',
    releaseYear : 2020,
    rating :9, 
    director :'McDirector'
}

showProperties(movie);

function showProperties(obj) {
    for (let properties in movie)
    console.log(properties, movie[properties])
}

// Line 87 reads as Console Log; Properties, and...
// ... the Properties within movie

// Step 3; Add typeof filter functionality - Idk how to - Googled it and failed. 
const movie = {
    title : 'Horror Show',
    releaseYear : 2020,
    rating :9, 
    director :'McDirector'
}

showProperties(movie);

function showProperties(obj) {
    for (let properties in obj)
    console.log(properties , obj[properties])
}

// Feedback
// Typeof filter functionality doesn't exist! it was simply If logic you were missing!
// If the (typeof obj[properties inside] are strictly equal to 'string'), then take the action! 

// Step 4; With feedback; Add if logic to seperate strings from numbers
const movie = {
    title : 'Horror Show',
    releaseYear : 2020,
    rating :9, 
    director :'McDirector'
}

showProperties(movie);

function showProperties(obj) {
    for (let properties in obj)
    if (typeof obj[properties] === 'string')
    console.log(properties , obj[properties]);
}





// Taught Attempt 
// Step 1: add for loop

const movie = {
    title = 'Horror Show',
    releaseYear= 2020,
    rating=9, 
    director='McDirector'
}

showProperties(movie);

function showProperties(obj) {
 for (let key in movie)
}
// Taught Attempt 
// Step 2: add console log to for loop; to show properties

const movie = {
    title: 'Horror Show',
    releaseYear: 2020,
    rating:9, 
    director: 'McDirector'
}

showProperties(movie);

function showProperties(obj) {
 for (let key in movie)
 console.log(key);
}

// Taught Attempt 
// Step 3: Add bracket notation; to get value of property

const movie = {
    title: 'Horror Show',
    releaseYear: 2020,
    rating:9, 
    director: 'McDirector'
}

showProperties(movie);

function showProperties(obj) {
 for (let key in obj)
 obj[key];
}
// Taught Attempt 
// Step 4: Add typeof Operator; check the type of the property

const movie = {
    title: 'Horror Show',
    releaseYear: 2020,
    rating:9, 
    director: 'McDirector'
}

showProperties(movie);

function showProperties(obj) {
 for (let key in obj)
 typeof obj[key];
}
// Taught Attempt 
// Step 5: Put the line inside an if statement;
const movie = {
    title: 'Horror Show',
    releaseYear: 2020,
    rating:9, 
    director: 'McDirector'
}

showProperties(movie);

function showProperties(obj) {
 for (let keyDetails in obj)
 if (typeof obj[keyDetails] === 'string')
  console.log(keyDetails, obj[keyDetails]);
}
// Lines read' If (the type of Object, within Key === a String.
// Then display the Key, as well a the Object of Key  