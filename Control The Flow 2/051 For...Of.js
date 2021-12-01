// For...Of
//
// Used to loop through the values of an iterable object [arrays]

for (let variable(key) of object ) {
    statement/Action
    statement2/Action2
};
console.log(variable);                      //Shows Properties + Values


//  let Key             = declare the variable that will store properties (keys).
//  of Object           = declare the object that will be looped through.
//  IncrementExpression = Not needed - will loop through the entire object. 

// Statement/Action     = take this action each loop.

// For of returns the value of the element from an array
// Without needing a second temporary variable. 
const colors = ['red', 'green', 'blue'];

for (let color of colors)
console.log(color);





// For in returns a Variable (Color here), 
// then the corresponding value of that variable (Color here)
const colors = ['red', 'green', 'blue'];

for (let color in colors)
console.log(color, colors[color]);