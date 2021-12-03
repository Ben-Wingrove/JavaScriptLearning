// Exercises

// Exercise 1 - Sum of arguments - returns total of arguements

// sum(1,2,3,4) = 10.

// bonus sum([1,2,3,4]) = 10
// bonus need Array.isArray() - will result in t / f

function sum(...arguements) {
  return arguements.reduce((a, b) => a + b);
}
console.log(sum(2, 3));

// Easy part done - full marks!

function sum(...arguements) {
  if (arguements.length === 1 && Array.isArray(arguements[0]))
    arguements = [...arguements[0]];

  return arguements.reduce((a, b) => a + b);
}
console.log(sum([2, 3]));
// Hard part - First item was an array of an array!

// Exercise 2 - Area of a Circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

// Exercise 3 - Add error handling
// 1 - if arguement is not array - throw exception
// 2 - wrap first 2 lines in a try/ catch block

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurances(null, 1);
  console.log(count);
} catch (e) {
  alert(e);
  console.log(e.message);
}

function countOccurances(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Value is not an array.");
  } else {
    return array.reduce((accumulator, current) => {
      const occurence = current === searchElement ? 1 : 0;
      console.log(accumulator, current, searchElement);
      return accumulator + occurence;
    }, 0);
  }
}
