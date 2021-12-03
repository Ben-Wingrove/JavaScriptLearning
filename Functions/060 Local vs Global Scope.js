// Local vs Global Scope
//
// Scope of variable/constant determines where it is accessable.
//
// const / let variables are limited to the codeblock
// in which they are defined.

{
  const message = "hi"; // message only defined inside the {}
}
console.log(message);
// This yeilds an error

function start() {
  const message = "hi";
  if (true) {
    const another = "bye"; //  another only defined inside the {}
  }
}
console.log(another);
// This yeilds an error

function start() {
  const message = "hi";
  if (true) {
    const another = "bye";
  }
  for (let i = 0; i < 5; i++) {
    // i only defined inside the {}
  }
}
console.log(i);
// This yeilds an error

function start() {
  const message = "hi";
}

function stop() {
  const message = "bye";
}
// This is totally fine; As far as scope is concerned...
// The 'const message' are restricted inside code blocks
// they do not see eachother

const color = "Red";
// this const color is accessable globally, its not inside any {}
// Do not define global constants - it can cause snowball issues.

function stop() {
  const color = "Blue";
  return color;
}
console.log(stop());
