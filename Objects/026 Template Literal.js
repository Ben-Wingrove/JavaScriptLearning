// Template Literals ``
//
// Literally acts as a template;

// String Primative from previous
const message = "This is my\r" + "'first' message";
// Prints as;
// This is my
// 'first' message
// Hard to visualise, need to mess around too much.

// Template Literal ``
const another = `This is my 
'first' message`;
// Much easier to visualise... especially when doing tasks...

//Example 1
const email = ` Hi John, 

Thanks for doing the thing! 

Regards,
Me`;

//Example 1 ~ Dynamic Names, sums, allsorts!
// Literally as long as ${} returns a value, it can be used!
const name = "John";
const total = 5 + 3;
const email = ` Hi ${name}, 

Thanks for doing the thing! 
Your total is £${total}.

Regards,
Me`;
