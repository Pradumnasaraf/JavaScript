/*
Syntax: /pattern/modifiers;

/w3schools/i  is a regular expression.

w3schools  is a pattern (to be used in a search).

*/

let a ="Hey I'm Pradumna Saraf"

console.log(a.search("Pradumna"))
//console.log(a.search("pradumna")) not found: -1
console.log(a.search(/pradumna/i)) // i  is a modifier (modifies the search to be case-insensitive).

let text = "Visit Microsoft!";  
let result = text.replace(/microsoft/i, "W3Schools");
console.log(result)

// test() It searches a string for a pattern, and returns true or false,
const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));




