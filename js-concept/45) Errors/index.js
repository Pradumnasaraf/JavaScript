/*
SYNTAX:
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}

*/

// intentionally We produce an error by making an typo error addlert
try {
    adddlert("Welcome guest!"); // try to execute this code
}
catch(err) {
    console.log("ERROR") // Ctch block catches the error
}
finally{
    console.log("Finally Block get Executed")
}

// The throw Statement
let x=""
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
}
catch(err) {
    console.log("Input is " + err)
}


/* <input id="demo" type="number" min="5" max="10" step="1"> Modern HTML*/

// The Error Object - JavaScript has a built in error object that provides error information when an error occurs.

//Syntax Error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
    console.log(err.name) //  .name is what type of error it is
}

// Refrence Error:


let xx = 5;
try {
  xx = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err.name);
}