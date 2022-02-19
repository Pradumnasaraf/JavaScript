//forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction1);

function myFunction1(value, index, array) {
  txt += value +", "
}
console.log(txt)


// map() method creates a new array by performing a function on each array element.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);

function myFunction2(value) {
  return value * 2;
}
console.log(numbers2[1])  //4*2
console.log(numbers2)

// filter() method creates a new array with array elements that passes a test.

const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunctions3);

function myFunctions3(value, index, array) {
  return value > 18;
}

console.log(over18)

// reduce() method runs a function on each array element to produce (reduce it to) a single value.

const numbers4 = [455, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction4);

function myFunction4(total, value, index, array) {
  return total + value;
}
console.log(sum)

// every() - method check if all array values pass a test.

const everynum = [45, 4, 9, 16, 25];
let allOver18 = everynum.every(myFunction5);

function myFunction5(value, index, array) {
  return value > 18;
}

console.log(allOver18)

//  some() method check if some array values pass a test.
const numbers5 = [45, 4, 9, 16, 25];
let someOver18 = numbers5.some(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}
console.log(someOver18)

//  find() method returns the value of the first array element that passes a test function.

const numbers6 = [4, 9, 16, 25, 29];
let first = numbers6.find(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}
console.log(first)


// findIndex() method returns the index of the first array element that passes a test function.
const numbers7 = [4, 9, 16, 25, 29];
let first1 = numbers7.findIndex(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}
console.log(first1)

//The Array.from() method returns an Array object from any object with a length property or any iterable object.

console.log(Array.from("ABCDEFG"));

//The Array.keys() method returns an Array Iterator object with the keys/index of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x)
}


// The entries() method returns an Array Iterator object with key/value pairs:

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits8.entries();

finalStr =""
for (let x of f) {
  console.log(x)
}


