// Operators
//
// Used with variables to create Expressions,
//                          that hold logic +/ algorithms
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  Arithmetic Operators     -  Used to perform calculations
//                    Pretty much using a calculator inside of our code
//               + / * % ** ++ --
//
//
//

console.log(Expression);

//
//
//
//
//
//
//
//
//
//
// Exercise Examples;

console.log(x + y); 
//<Addition
console.log(x - y); 
//<Subtraction
console.log(x * y);
 //<Multiplication
console.log(x / y);
 //<Divide
console.log(x % y);
//<Remainder of division
console.log(x ** y); 
//<Exponentiation; X to the power of Y
console.log(++x); 
//<Increment before function
console.log(x++); 
//<Increment after function
console.log(--x); 
//<decrement before function
console.log(x--); 
//<decrement after function
//
//
//
//
//
//
//
//
//
//
//
// Assignment Operators
//                  Used to assign values
//                    = += *= -= /= %=
//
//
//

console.log(Expression);

//
//
//
//
//
//
//
//
//
//
//
// Exercise Example; 
Let x = 10;				
//Declare x = 10;
x += 5;					 
// Assign +5 to the value of X  
// Addition Assignment Operator

x *= 3;	
// Assign *3 to the value of X  
//Multiplication Assignment Operator

x -=5;					
// Assign -5 to the value of X 
// Subtraction Assignment Operator

x /=5;					
// Assign /5 to the value of X 
// Division Assignment Operator

x %=5;					
// Assign remainder of /5 to the value of X
// Remainder of Division Assignment Operator
//
//
//
//
//
//
//
//
//
//
// Comparison Operators
//    Used to compare the value of a variable with something else
//    (Comparison Operators are Boolean)
//
//
//     
//

console.log(Expression);

//
//
//
//
//
//
// Relational Comparison Operators 
//
// Exercise Example

let x = 1; 
//Declare the value of X 
Console.log(x > 0); 			True	
//Checks/Compares if X is MORE THAN 0
Console.log(x >= 1); 			True	
//Checks/Compares if X is MORE THAN, OR EQUAL TO 1
Console.log(x < 1); 			False	
//Checks/Compares if X is LESS THAN 1
Console.log(x <= 1); 			True	
//Checks/Compares if X is LESS THAN, OR EQUAL TO 1

//
//
//
//
//
//
//
//
//
//
// Equality Operators 
//              Checks if the value is the equal or different
//
//

console.log(x === y);
// or 
console.log(x !== y);

//
//
//
// Exercise Example

let x = 1;
// Declare the value of X
console.log(x === 1);            
//Shows True  (because  X = 1) 
//Checks that both sides have the same 
console.log(x !== 1);            
//Shows False (because X = 1)
//Checks that both sides do NOT have the same value

//
//
//
// Strict Equality Operators 
// 
//
//

console.log( x === y);

//
//
//
// Exercise Example
console.log(1 === 1);     
// Checks that both sides of the operator are the same type + value
// Would print true + true ( Because 1 is a number and value is 1)
//
console.log('1' === 1);   
// Checks that both sides of the operator are the same type + value
// Would print false ( Because 1 is a string, but value is 1)
// Need both to be true to return true.

//
//
//
// Loose Equality Operators 
//
//
//

console.log( x == y);

//
//
//
// Exercise Example
console.log(1 == 1);     
//  Checks that both sides of the operator are the same value
//  Would print true (because both sides have value of 1 )
//
console.log('1' == 1); 
//  Checks that both sides of the operator are the same value
//  Would print true (because both sides STILL have value of 1 )
//
Console.log(true == 1);
//  Checks that both sides of the operator are the same value
//  Would print true (because both sides STILL have value of 1 )
//  Boolean values convert other types to boolean 
//  (1 = True / 0 = False)

//
//
//
// Ternary (Conditional) Operators 
//
//
//
//
//

//
let VARIABLE = VALUE
let SECOND_VARIABLE = VARIABLE (Comparison Operator) VALUE ? TRUE ACTION : FALSE ACTION  
//
//
//
//
//
//
// Exercise Example; 
//  If a customer has more than 100 points,
//  they are a ‘gold’ customer.
//  Otherwise, they are a ‘silver’ customer
let points = 110;
// Declare a variable
let type = points > 100
// Declare a variable with comparitive operator 
// Expression "points > 100" will check and produce true or false. 
console.log(type)
// >Here the code will show true (because points are set to 110)
//
//
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)
// > Here we add the "? 'gold' : 'silver';" 
// > This Translates to (?) IF EXPRESSION TRUE ('gold') PRINT GOLD 
//                          (:) IF FALSE ('silver;) PRINT SILVER
let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)
// Same code, different number 
//
//
//
//
// Solo Exercise 
//
let speed = 80
// Declare a varible; Speed - 80Mph
let speedLimit = 70
// Declare a variable; SpeedLimit - 70Mph
let fine = speed > speedLimit ? 'Fine - Pay £100': 'All Good'
// Declare third variable with comparitive operator 
// (Speed IS GREATER THAN SpeedLimit)
// If true ~ Print: Fine - Pay £100
// If false ~ Print: All Good 
console.log(fine) 
//Show Results - Looks like we've gotta pay up!
//
//
let age = 21;
//Declare variable; Age = 21
let allowedToDrink = age > 18 ? 'Yes' : 'No';
// Declare variable allowedToDrink 
// (Age > 18) ? (Is true?)
// True; 'Yes'
// False; 'No'
console.log(allowedToDrink); 
// Show Results - Looks like we're gonna go drinking!

//
//
//
// Logical Operators  (And / Or / Not)
//          used to make decisions based on multiple conditions  
//  
//

//
//
//
// Logical AND (&&)
//      Returns true if both operands are true 
//
//
console.log ( X && Y );
//
//
//
// 
console.log(true && true);
// Evaluated; Returns true < 2 are true 
console.log(true && false);
// Evaluated; Returns False < only 1 is true
//
//
// Exercise Example 
let highIncome = true;						
//Declare high income is TRUE
let goodCreditScore= true;					
//Declare good credit is TRUE
let eligibleForLoan= highIncome && goodCreditScore;
//Declare that elibibleForLoan is True if both variables are TRUE
console.log(eligibleForLoan);					
//Results in True 
//
//
// Solo Example
let totallyTubular = true;
//Declare that variable 1 is true
let madRadDude = true;
//Declare that variable 2 is true 
let coolDude = totallyTubular && madRadDude;
//declare that variable 3 is true if both 1+2 are.
console.log(coolDude);
// Shows true - Siiick dude!
//
let totallyTubular = false;
//Declare that variable 1 is true
let madRadDude = true;
//Declare that variable 2 is true 
let coolDude = totallyTubular && madRadDude;
//declare that variable 3 is true if both 1+2 are.
console.log(coolDude);
// Shows false - Oh man, not cool.

//
//
//
// Logical OR (||)
//      Returns true if at least ONE operands are true 
//      Short-Circuiting;
//      retuns first truthy value in a list of OR conditions
//
console.log ( X || Y );
//
//
//
// 
console.log(true || true);
// Evaluated; Returns true < 2 are true 
console.log(true || false);
// Evaluated; Returns true < only 1 is true tho 
//
//
// Exercise Example 
let highIncome = true;						
//Declare high income is TRUE
let goodCreditScore= true;					
//Declare good credit is TRUE
let eligibleForLoan= highIncome || goodCreditScore;
//Declare that elibibleForLoan is True if both variables are TRUE
console.log(eligibleForLoan);	
//Results in True 
//
//
// Solo Example	
let tryingHard = true;
// declare variable 1 true
let hittingHard = false;
// declare variable 2 false 
let goodFighting = tryingHard || hittingHard; 
// declare variable 3 is true if variable 1 or variable 2 is true.
console.log(goodFighting)
// prints result; IS TRUE!

//
//
// Logical NOT (!)
//
//
//
let variable2 = !variable; 
//
//
//
// Exercise Example 
let highIncome = false;						
//Declare high income is TRUE
let goodCreditScore= false;					
//Declare good credit is TRUE
let eligibleForLoan= highIncome || goodCreditScore;
//Declare that elibibleForLoan is True if both variables are TRUE
console.log('Eligible', eligibleForLoan);	
//Results in false, prints 'Eligible'
let applicationRefused = !eligibleForLoan;
// Declare that applicationRefused = NOT eligibleForLoan
console.log('Refused', applicationRefused)
//Results in True, prints 'Refused'

// Solo Example 
let finished = false;
let trying = false;
let state = finished || trying;
console.log('You will get there!', state);
let nag = !state;
console.log('Come on you Fanny! You can do this!!!', nag);

//
//
//
// Logical Operator with non-boolean values  
//   Logical operator wants to evaluate to absolute True or False
//     If unable to determine absolute true or false 
//      logical operator will give truthy or falsy values
//
console.log ( Boolean || String / Number );
// 
//
//
//
console.log (false || true); 
// Boolean or Boolean; returns Boolean - absolute True 
console.log (false || 'Mosh'); 
// Boolean or String; - Returns String - Truthy value
console.log (false || 1 ); 
// Boolean or Number; - Returns Number - Truthy value
console.log (false || 1 || 2); 
// Boolean or Number1 or Number2; - prints the first truthy value
console.log(false || 0 || null || undefined || '' || NaN || 1)
// Boolean or falsy x5 or truthy; prints the first truthy value
//
// Falsy Values; (not absolute False, but falsy)
// undefined
// null
// 0
// false
// ''   (empty string)
// NaN
//
// Anything else is Truthy
//
// Exercise Example; Building an application to pick a color
let userColor = 'red';
//Declare variable 1
let defaultColor = 'blue';
//Declare variable 2
let currentColor = userColor || defaultColor;
// Declare that variable 3 = (if we have value use) Variable 1.. 
// .. or (if we dont have value use) Variable 2;
console.log(currentColor)
//Log to console; Prints RED 
//
// VS 
// 
let userColor = undefined;
//Declare variable 1
let defaultColor = 'blue';
//Declare variable 2
let currentColor = userColor || defaultColor;
// Declare that variable 3 = (if we have value use) Variable 1.. 
// .. or (if we dont have value use) Variable 2;
console.log(currentColor)
//Log to console; Prints BLUE 

// Solo Example;
let state = 'He Dead';
let defaultState = 'Alive';
let currentState = state || defaultState
console.log("What does he look like?", currentState);
//
// VS 
//
let state = undefined;
let defaultState = 'Alive and kicking!';
let currentState = state || defaultState
console.log("What does he look like?", currentState);

//
//
//
// Bitwise Operators (Binary)
// Each digit called a bit ~ Each string of 8 bits is a Byte)
//              OR = |  
//              AND = &
//
//Number 1 	= Binary 00000001
//Number 2	= Binary 00000010
//Number 3	= Binary 00000011
//Number 4	= Binary 
//
//
console.log(1 | 2); 
// Checks 1 or 2; prints value of 3
// 1 = 0000001
// 2 = 0000010
// R = 0000011 = 3

console.log(1 & 2); 	
// checks 1 and 2; prints value of 0
// 1 = 0000001  < value here
// 2 = 0000010  < value here
// R = 0000000  < neither bytes of data are the same, no results.

console.log(1 & 7); 	
// Checks 1 and 2; prints value of 1
// 1 = 0000001
// 7 = 0000111
// R = 0000001 < only 1 byte of data is the same, hench 1.

//
// Exercise Example 
// Access control system
// Represent Read, Write and Execute permissions in Bitwise;
//
//Read: 		00000100
//Write:		00000010
//Execute:	    00000001
//
// R Only       0000100
// R + W        0000110
// R + W + E    0000111
//

const readPermission = 4;
//Declare a constant for Read - Value 4 / Binary 00000100
const writePermission = 2;
//Declare a constant for Write - Value 2/ Binary 00000010
const executePermission = 1;
//Declare a constant for Execure - Value 1/ Binary 00000001
let myPermission = 0;
//Declare a variable set to 0
myPermission = myPermission | readPermission | writePermission 
// variable = variable or read or write 
console.log(myPermission);	
// Returns value of 6
let message = (myPermission & readPermission) ? 'yes' : 'no' ;
// let variable = (condition) ? if true - yes : false - no
console.log(message);		
// Logs message of yes (because user has readPermission) 

//
//
// Operator Precedence 
//               Each operator has its own place in the heirarchy
//               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
//           ( ) is right at the goddamn top. 
//
//
// Exercise Example 
let x = 2 + 3 * 4;
// Multiplication has Precedence of 15
// Addition has Precedence of 14
// (Multiplication is performed before Addition)
// Returns a result of 14 
let y = (2 + 3) * 4; 	
// Grouping (brackets) has a precedence of 21 (Top)
// Multiplication has a Preceidence of 15
// Addition within bracket will be performed before multiplication
// Returns result of 20
console.log(x, y)
//
//
//
// Quiz

//What is the result of “true && false”?
//
// Logical AND (&&) Checks if both sides are the true. 
// true && false
// =False 
//
//a- true
//  >>>>   b- false 
//c- null
//d- undefined

//What is the result of “(true && false) || true”?
//
// Logical AND (&&) checks if both sides are true. 
// Logical OR (||) Checks if ONE side is true. 
// (true && false) || true
// = false || true 
// = True
//
// >>>>>> a- true
//b- false
//c- null
//d- undefined

//What is the value of y? 
let x = 10; 
let y = (x > 10) ? 1 : 0; 
//
// y = condition ? IF TRUE 1 : IF FALSE 0;
//      x > 10
//        x = 10, so that condition is false
//          y = 0
//   
//a- 10
//b- 1
//>>>>>> c- 0 
//d- 11

//4- What is the value of x?
let x = (2 + 3) * (4 + 5);
//
// ( ) Has Precedence of 21
// *   Has precednece of 15
// +   Has precedence of 14
//      Because + is within ( ) it is actioned first
//  x = (2 + 3) * (4 + 5);
//  x =  6 * 9 
//  x =  45
//
// >>>>>>>>a- 45
//b- 25
//c- 20
//d- 40

//Which expression returns true? 
//
// '1' === 1; STRING / Value 1 === NUMBER / Value 1 = FALSE
//  1  ==  1; Number / value 1 == number / value 1 = True
//  1  === 1; number value 1 === number value 1 = true
//
//a- ‘1’ === 1; 
//b- 1 == 1
//c- 1 === 1
// >>>>>>>> d- b and c 

//What is the value of x?
let x = (1 == true); 
//
// x = (condition) 
//       1  (Loose Equatlity Operator) true 
//       true will return a value of 1
//      
//a- 1
//>>>>>>>>>> b- true
//c- false 
//d- undefined

//What is the value of y?
let x = 10;
let y = (x > 5) && (x < 15); 
//
// y = (condition) && (condition)
//     x>5 is true    x<15 is true
//          true   &&   true
// y = true
//   
//a- 10
//b- 5
//c- 15
// >>>>>>> d- true

//What is the value of x?
let x = 5; 
x += 3; 
// x = 5 
// +3 to the value of X 
// x = 8
//
//a- 3
// >>>>>>>b- 8
//c- 15
//d- 5

//What is the value of y? 
let x = 10; 
let y = x++;
// y = x +1 after the function
// no function to run 
// y = 10
//
// >>>>>>> a- 10
//b- 11
//c- 12
//d- 13

//What is the value of y? 
let x = 1; 
let y = x !== 2;
//
// y = x NOT EQUAL TO 2
// y = true 
//
//a- 1
//b- 2
//c- false
// >>>>>>d- true
