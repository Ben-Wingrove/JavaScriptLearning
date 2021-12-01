// For...In
//
// Used to loop through the properties of an object

for (let variable(key) in object ) {
    statement/Action
    statement2/Action2
};
console.log(variable);                      //Shows Properties
console.log(variable, object[variable]);    //Shows properties + values

//  let Key             = declare the variable that will store properties (keys).
//  in Object           = declare the object that will be looped through.
//  IncrementExpression = Not needed - will loop through the entire object. 

// Statement/Action     = take this action each loop.


const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
console.log(key);
// This will show a key property within the object each loop. 
console.log(key, person[key]);
// This will also show the value of each key, within Person.