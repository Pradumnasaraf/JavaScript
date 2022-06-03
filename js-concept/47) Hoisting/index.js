// Hoisting is JavaScript's default behavior of moving declarations to the top.

x =11  
console.log(x) // a variable (var)an be used before it has been declared.
var x;

let y;
y =12;
console.log(y)

// let and const
//Variables defined with let and const are hoisted to the top of the block, but not initialized.

/* ERROR

carName = "Volvo";
let carName;

carName = "Volvo";
const carName;

*/

//JavaScript only hoists declarations, not initializations.

var xx = 5; // Initialize x
var yy;     // Declare y
console.log(xx + yy)

var yy = 7; // Initialize y



