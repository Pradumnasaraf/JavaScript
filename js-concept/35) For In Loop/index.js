//The JavaScript for in statement loops through the properties of an Object:

/*
for (key in object) {
  // code block to be executed
}
*/

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) { // will return the keys x
  console.log(`${x} : ${person[x]}`) // keys : value
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(numbers[x])
}

// for each
const numbers2 = [45, 4, 9, 16, 25];

let txt1 = "";
numbers2.forEach(myFunction);

function myFunction(value, index, _array) {
  txt1 += value+ ", ";
}
console.log(txt1)
