// Objects are Dynamic, once you create them, you can always add
// or delete variables, etc from an object.

//Example;
const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

console.log(circle);
// Shows; { radius: 1, color: 'yellow', draw: [Function (anonymous)] }
// but we only set 1 variable in object at time of declaration

const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);
//shows { radius: 1 }
// First we will give-eth, and we take-eth away.

// Can't re assign 'const circle' to be something else
// but we can chop and change the variables inside
// 'const circle' as much as we like
