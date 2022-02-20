// The JavaScript for of statement loops through the values of an iterable object.

/*

for (variable of iterable) {
  // code block to be executed
}

*/

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) { // will return the value of the object
  console.log(x)
}

const numbers = [45, 4, 9, 16, 25];

for (let x of numbers) {
    console.log(x)
}

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  console.log(x)
}
