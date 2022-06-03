const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString()) // Conevrt the array to the string
console.log(fruits.join())

////////////////////////

let largeCountries =["China", "India","USA","Indonesia","Pakistan"]

largeCountries.pop() // remove the elemnet from the end of the array
largeCountries.push("Pakistan")  // add a elemnt to the last of the array
largeCountries.shift()   // remove the 1st element in the array
largeCountries.unshift("China")  //add a element to the 1st
console.log(largeCountries)


////// MERGING TWO ARRAY /////

const array1 = ["One", "two", "three"]
const array2 = ["four","five"]

const finalArray = array1.concat(array2,"Six") //  method can take any number of array arguments, also a string arguments
console.log(finalArray)


//// Splicing - NOTE make chnages to the original array///

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
// starting index, number of elements to remove,  elemets we want to add
let deleted1 = fruit1.splice(2,0,"Mango") 
console.log(deleted1)
console.log(fruit1)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let deleted2 = fruits2.splice(2, 2, "Lemon", "Kiwi"); // it will remove Apple And mango
console.log(fruits2)
console.log(deleted2)


///// Array slice()//////

const numbers = ["One", "two", "three", "four","five"]

console.log(numbers.slice(1)) // Return the new sliced array  1 - last
console.log(numbers.slice(1,3)) // satrting index and end index (end index will get exluded)
console.log(numbers) // original one remains same even after removing the element

