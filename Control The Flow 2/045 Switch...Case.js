//Switch...Case
//Used to compare the value of a variable against a bunch of other values
//Use for Numbers + Strings.

switch (variable) {
  case statement:
    // ^^^ Compares value of variable with statement
    action;
    // If the value of the variable and the statement
    // are the same, Take this action.
    break;
  // After completing action, break.

  case statement2:
    // Same as above
    action2;
    break;

  default:
    // If the variable does not match to statement
    action3;
  // or statement2, then
  // as a default, take action3.
}

let role = "guest"; // 'moderator' // 'xx'

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// Same thing with if...else
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");
