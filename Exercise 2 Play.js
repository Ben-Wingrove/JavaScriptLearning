//Exercise 2
//Should return true if Width is greater than height
function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(1600, 8000));

// Lesson 02
// If the function is meant to return a boolean value, there is no need for ? X : Y in the latter part of the code.

// Play 02
// Is X height Tall?
function isTall(height) {
  return height > 180;
}
console.log(isTall(140));
console.log(isTall(190));

//Should return true if younger than friend
function isYounger(self, friend) {
  return self < friend;
}
console.log(isYounger(18, 19));
console.log(isYounger(24, 21));

//Should return true if Speeding over 75
let speedLimit = 70;
let gracePeriod = 5;
function isSpeeding(speed, speedLimit) {
  return speed > speedLimit + gracePeriod;
}
console.log(isSpeeding(30, speedLimit));
console.log(isSpeeding(75, speedLimit));
console.log(isSpeeding(80, speedLimit));
