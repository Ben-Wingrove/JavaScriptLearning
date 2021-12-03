// Mapping an Array
//

.map();
//Syntax (function(VALUE, INDEX, ARRAY[])); ~ index / array are optional
// Will return a new array. 
// Will not amend previous array.
// Is chainable. 



const numbers = [1, 2, -2, 3];

const filtered = numbers.filter((value) => value >= 0);

console.log(filtered);
// Filtered Array from last lesson shows 1,2,3. 

// Ex; 1
// Lets construct HTML Markup, from the elements in the array...

filtered.map (value => '<li>' + value + '</li>'); 
// Declare it as a constant, that can be logged.
const items = filtered.map (value => '<li>' + value + '</li>'); 
console.log(items);
// Shows  ['<li>1</li>', '<li>2</li>', '<li>3</li>']

// Join elements of array into a string...
const html1 = items.join();
console.log(html1);
// Shows <li>1</li>,<li>2</li>,<li>3</li>

// These default comments would wreck the HTML.
// Use an empty string as our seperator 
const html2 = items.join('');
console.log(html2);
// Shows as <li>1</li><li>2</li><li>3</li> - Great!

// Now we need to put our Li's in an UL or OL!
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
// Shows as <ul><li>1</li><li>2</li><li>3</li></ul>  
// Fantastic HTML! 
//
// All together now...
const numbers = [1, 2, -2, 3];

const filtered = numbers.filter((value) => value >= 0);
console.log(filtered);

const items = filtered.map (value => '<li>' + value + '</li>'); 
console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
//
//


const numbers = [1, 2, -2, 3];

const filtered = numbers.filter((value) => value >= 0);

console.log(filtered);
// Filtered Array from last lesson shows 1,2,3. 

// Ex; 2
// Lets map the items to an object! 
filtered.map (value => {
const obj = {value : value};
return obj;
 });

// Declare it as a constant, that can be logged.
const items = filtered.map (value => {
    const obj = {value : value};
    return obj;
    });
console.log(items);
// Shows  [{…}, {…}, {…}]
// 3 different objects,
// 0: {value: 1}
// 1: {value: 2}
// 2: {value: 3}

// We dont need to declare an object, then return an object.. 
const items = filtered.map (value => {
    return {value : value};
     });
console.log(items);
// Acts the same as codeblock above. 

// We can reduce this further... 
const items = filtered.map (value => {value : value});
console.log(items);
// Will return [ undefined, undefined, undefined ]
// Throws a spanner in the Javascript engine 

// Object needs to be in brackets ()
const items = filtered.map (value => ({value : value}) );
console.log(items);
// Much better. 
// Returns [ { value: 1 }, { value: 2 }, { value: 3 } ], as epected.

//
// All together now
const numbers = [1, 2, -2, 3];

const filtered = numbers.filter((value) => value >= 0);
console.log(filtered);

const items = filtered.map (value => ({value : value}) );
console.log(items);
//
//

// Chainable? 
// Methods can be chained together, 
// to prevent needlessly saving variables.

const numbers = [1, 2, -2, 3];

const items = numbers
.filter (value => value >= 0)
.map (value => ({value : value}));
console.log(items);

// This functions exactly the same as the codeblock above,
// But is far, far cleaner.

// We can keep chaining... 
const numbers = [1, 2, -2, 3];

const items = numbers
.filter (value => value >= 0) 
// Filter > NEW ARRAY with numbers that are (string)numbers >= 0
.map (value => ({value : value}))
// MAP > NEW ARRAY with numbers that are (valued) numbers
.filter ( obj => obj.value > 1)
// Filter > NEW ARRAY with numbers that valued more than 1 
.map(obj => obj.value);
// MAP > NEW ARRAY of object values 
console.log(items);