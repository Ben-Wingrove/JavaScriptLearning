// (Enumerating) Properties of an Object
// (the action of mentioning a number of things one by one)
//
// How to (iterate) an object.
// (Repeat/Tell us its contents)

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// Example 1; For in loop
for (let key in circle) console.log(key);
// Iterates all properties/methods(Keys) IN circle
// Shows 'Radius + Draw'
for (let key in circle) console.log(key, circle[key]);
// iterates all Keys IN circle,
// as well as circle[value of keys within]
// Shows 'Radius 1, Draw [function: draw]'

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// Example 2; For of loop
for (let key of circle) console.log(key);
// Throws Error - "circle is not iterable"
// Duh~ Objects aren't iterable ~ only Arrays + Maps are iterable

for (let key of Object.keys(circle)) console.log(key);
// Bypass the Error by asking for
// All of the keys; within the Object.keys(OF circle)
// Object.keys(circle) will return Keys as an array.
// Shows Radius + Draw

for (let entry of Object.entries(circle)) console.log(entry);
// All of the keys + values; within the Object.entries(OF circle)
// Object.entries(circle) will return Keys + Values as an array.
// Shows Radius, 1 + Draw, function

const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// Example 3; Just checking if a variable is within
// the selected object; go fish!
if ("radius" in circle) console.log("yes");
// Checks if a given variable exists IN a given object
// Will return 'yes'
if ("color" in circle) console.log("yes");
// Will return undefined / nothing
