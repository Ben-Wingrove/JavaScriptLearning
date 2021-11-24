// Objects are collections of key value pairs 
// Objects exist to group related variables and functions
//
// Example; Drawing shapes
let radius = 1; 
let x = 1;
let y = 1; 

// Could be 10s, or 100s of lines long... 
// Put it all in a box, and call the box! 
// All in an object, call the object

// Example; 
const circle = {
    radius = 1, 
    x = 1,
    y = 1, 
}

// the values here can be anything... 
// Number, string, boolean, null, another object,
// an array or even a function!

// Example; 
const circle = {
    radius: 1, 
    location: {
        x : 1,
        y : 1, 
    },
    isVisable: true,
    draw: function() {
        console.log('draw');
    }
}

circle.draw(); // Draw Method.

// This is an example of Object-Orentated Programing (OOP) 
// OOP is a style of program where we se a program as a collection
// of objects that comunicate with eachother to perform functionality.

// If a function is part of an object, its refered to as a method