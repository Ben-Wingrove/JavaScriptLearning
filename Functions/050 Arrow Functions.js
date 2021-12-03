// Function to Arrow Function 
//Step 1 - remove "function"  
//Step 2 - remove () around arguement (if single) 
//Step 3 - add => before {}
//Step 4 - remove {} 
//Step 5 - remove return

// Traditional Anonymous Function
function (a){
    return a + 100;
  }
  
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }
  
  // 2. Remove the body braces and word "return" -- the return is implied.
  (a) => a + 100;
  
  // 3. Remove the argument parentheses
  a => a + 100;

// Function to Arrow Function 
//Step 1 - remove "function"  
//Step 2 - remove () around arguement (if single) 
//Step 3 - add => before {}
//Step 4 - remove {} 
//Step 5 - remove return

// Traditional Anonymous Function
function (a, b){
    return a + b + 100;
  }
  
  // Arrow Function
  (a, b) => a + b + 100;