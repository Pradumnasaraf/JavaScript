// JavaScript has a Boolean data type. It can only take the values true or false.


console.log(Boolean(10 > 9))

// True Value
100, 3.14, -15

// False Value
// false
// 0
// ""
// null
// undefined
// NaN

let a;
console.log(Boolean(a))  //False

let trueorfalse = Boolean(-0) //False
console.log(trueorfalse)

trueorfalse =Boolean(0)  //False
console.log(trueorfalse)

trueorfalse =Boolean("") //False
console.log(trueorfalse)

trueorfalse =Boolean(null) //False
console.log(trueorfalse)

let x = 10 / "Hallo"; //=NaN  //False
console.log(Boolean(x));
