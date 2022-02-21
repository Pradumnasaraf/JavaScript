// JavaScript variables can be converted to a new variable and another data type:

console.log(Number("3.14") )   // returns 3.14
console.log(Number(" ")    )   // returns 0
console.log(Number("")     )   // returns 0
console.log(Number("99 88"))   // returns NaN
console.log(parseFloat("22.7"))	
console.log(parseFloat("223"))	
console.log(parseInt("11"))

// Unary + Operator

let y = "5";      // y is a string
let x = + y;      // x is a number
console.log(x)

let yy = "John";   // y is a string
let xx = + yy;      // x is a number (NaN)
console.log(xx)

// Converting Numbers to Strings

console.log(String(124 +23))
console.log(String(1222))
x= 12
console.log(x.toString())

// Converting Dates to Numbers

d = new Date();
console.log(d)
console.log(Number(d))          // returns 1404568027739

//OR THIS

e = new Date();
e.getTime()        // returns 1404568027739

//  Converting Dates to Strings

console.log(String(Date()))
//OR
Date().toString()

// Converting Booleans to Numbers

Number(false)     // returns 0
Number(true)      // returns 1

// Converting Booleans to Strings

String(false)      // returns "false"
String(true)       // returns "true"

//OR
false.toString()   // returns "false

console.log("5"-  2 + "3") //33