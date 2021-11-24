// Exercise 6 
// 
// Create an array of price range objects; 
// Cheap / Moderate / Expensive 
//
//

//Attempt 1
const priceRange = [
    { name: 'Cheap' , value: <15  },
    { name: 'Moderate', value: >15 && <30 },
    { name: 'Expenive', value: >31 },
];

// 40% - Bad.
// Good grammar. 
// failed logic - Attempting to do too much in one function.
// missed 2/4 tooltips  
0

// Should be;
// 1 to set the price ranges
// 2 to gather the price from resteraunt 
// 3 to sort the price into the range.

const priceRange = [
    { label: '£', name: 'Cheap', minValue: 0, maxValue: 10 },
    { label: '££', name: 'Moderate', minValue: 11, maxValue: 21 },
    { label: '£££', name: 'Expensive', minValue: 21, maxValue: 50 },
];

let resterauntPrice = [
    {averagePerPerson: 5}
]

function priceSorter();