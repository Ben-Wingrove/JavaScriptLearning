// Exercise 05
// takes array + search element
// checks array to see how many occurances of the search element is present

const numbers = [1, 2, 3, 4, 1];

const count = countOccurances(numbers, 1);

console.log(count);

function countOccurances(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}

const numbers = [1, 2, 3, 4, 1];

const count = countOccurances(numbers, 1);

console.log(count);

function countOccurances(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}
