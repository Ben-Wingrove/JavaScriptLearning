// Break;
// This will cause the code to stop
break;

let i = 0;
while (i <=10) {
    if (i===5) break;       // Code breaks when i = 5 
console.log(i);
i++;
}

// Continue;
// This will cause the code to continue from the beginning
continue; 

let i = 0;
while (i <=10) {
    if (i % 2 === 0) {
        i++
        continue;           // Code reaches this point, then continues from the top
    } 

console.log(i);             // Code counts in odd numbers
i++;
}