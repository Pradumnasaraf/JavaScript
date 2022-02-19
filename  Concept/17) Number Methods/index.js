let x =200;
console.log(x.toString())

// toExponential() returns a string, with a number rounded and written using exponential notation.
let xx= 9.554
console.log(xx.toExponential(5)) 

// toFixed() returns a string, with the number written with a specified number of decimals:
console.log(x.toFixed(0))
console.log(x.toFixed(4)) 

// toPrecision() returns a string, specified length:
let zz= 9.64525225
console.log(zz.toPrecision(2))
console.log(zz.toPrecision(3))
console.log(zz.toPrecision(5))

// valueOf() retuen a number

let xy = 123;
console.log(xy.valueOf())

//////////////////////Converting Variables to Numbers//////////////////////

/* There are 3 JavaScript methods that can be used to convert variables to numbers: Number(), parseInt(), parseFloat()*/


//Number()
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("John"));  //NaN
console.log(Number(new Date("1999-01-01")));  //retuen milliseconds till now

// parseInt()

console.log(parseInt("10.33")) // return only whole number
console.log(parseInt(10.33)) // return only whole number
console.log(parseInt("years 10")) // return only whole number
console.log(parseInt("10 years")) // return only whole number

//// parseFloat() 

console.log(parseFloat("10.33")) 
console.log(parseFloat(10.33)) 
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN) //NaN - Not a Number






