/*
In JavaScript there are 5 different data types that can contain values:
- string, number, boolean, object, function

There are 6 types of objects:
- Object ,Date, Array ,String, Number, Boolean

And 2 data types that cannot contain values:
- null, undefined
*/

console.log(typeof "John")                 // Returns "string"
console.log(typeof 3.14)                   // Returns "number"
console.log(typeof NaN)                    // Returns "number"
console.log(typeof false)                  // Returns "boolean"
console.log(typeof [1,2,3,4])              // Returns "object"
console.log(typeof {name:'John', age:34})  // Returns "object"
console.log(typeof new Date())             // Returns "object"
console.log(typeof function () {})         // Returns "function"
console.log(typeof myCar)                  // Returns "undefined" *
console.log(typeof null)                   // Returns "object"



// The constructor Property

console.log([1,2,3,4].constructor)

// EMPTY VALUE

let car = "";    // The value is "", the typeof is "string"

// NULL
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

// Difference Between Undefined and Null
// undefined and null are equal in value but different in type:
null === undefined         // false
null == undefined          // true
