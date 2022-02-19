// Numbers are Always 64-bit Floating Point

// We does not define different types of numbers, like integers, short, long, floating-point, JavaScript numbers are always stored as double precision floating point numbers

let num1 = 3.14;  
let num2 = 3;   
let num3 = 123e5;  // 12300000 

let x = "100";
let y = "10";
let z = x / y; // will work
let zz = x - y; // will work
let zzz = x + y; // will not work act like a string conact

let __x = 100 / "10"; // will work
let _x = 100 / "Apple"; // Nan

let x_x =  2 / 0; //Infinity
console.log(x_x)

let xx_ = 0xFF; // hexadecimal

let myNumber = 32;
console.log(myNumber.toString(2));