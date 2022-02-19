let text = "John Doe"; //Double Quote
//or
let text1 = 'John Doe'; //Single Quote

let y = new String("John"); // strings can also be defined as objects with the keyword new:

let answer1 = "It's alright"; //Single and double at the same time

let name  = "Pradumna Saraf";
console.log( name.length); // length of the string

// backslash escape character. \"  \\  \'

let a = "Hey! it\'s Pradumna saraf \"Developer\""

/*
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

console.log("Hey I'm \b Pradumna Saraf")
console.log("Hey I'm \f Pradumna Saraf")
console.log("Hey I'm \n Pradumna Saraf")
console.log("Hey I'm \r Pradumna Saraf")
console.log("Hey I'm \t Pradumna Saraf")
console.log("Hey I'm \v Pradumna Saraf")


/// LINE BREAKING

document.getElementById("demo").innerHTML = "Hello \
Dolly!"; // by giving blaksash we can brea code (within a text string )and write.

document.getElementById("demo").innerHTML =
"Hello Dolly!"; // can also break after operator

document.getElementById("demo").innerHTML = "Hello " +
"Dolly!"; // all browser don't support \ so use +


let xa = "John";
let ya = new String("John");
console.log(xa==ya) // true
console.log(xa===ya) // false

let xx = new String("John");
let yy = new String("John");
console.log(xx=yy) // can't be compareds

