// String

// In Javascript there are two types of Strings
// Primative / Object

// Use MDN for detailed reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Need to use Escape Notation within strings
// String ~ 'this is 'my' message' ~ This will break Engine
// String ~ 'this is \'my\' message' ~ Works just fine.

// String Primative
const message = "This is my first message ";
// typeof mesasge  = "String"
// Using Dot Notation, JavaScript wraps the primative in object
// message. will yeild results
// message.length           - Returns No. of characters in string
// message.[0]              - Returns value of string @ given Index
// message.includes('x')    - Returns T/F if string includes given value
// message.startsWith('x')  - Returns T/F if string starts with given value - CASE SENSITIVE
// message.endsWith('x')    - Returns T/F if string ends with given value - CASE SENSITIVE
// message.indexOf('x')     - Returns Index position of given value
// message.replace('x','y') - Returns input, but replaces First input, with Second Input
// message.toUpperCase()    - Returns input entirely in uppercase
// message.trim()           - Returns input without white space
// message.trimRight()      - As above, but only Right
// message.trimLeft()       - As above, but only Left

// String Object
const another = new String("hi");
// typeof another = "Object"
