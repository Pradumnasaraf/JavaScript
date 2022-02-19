let myString = "Hey! pradumna, I am pradumna from patna, pradumna from india"

console.log(myString.indexOf("pradumna")) // first occurrence of a specified text in a string

console.log(myString.lastIndexOf("pradumna")) // last occurrence of that string

console.log(myString.lastIndexOf("prad-umna")) // return -1

console.log(myString.indexOf("pradumna", 15)) // search will start from 15 index position to last
console.log(myString.lastIndexOf("pradumna", 15)) // serch from 15 to 0 (begin...) 

console.log(myString.search("pradumna")) // similar like indexof but here we can give sec para.

console.log(myString.match(/na/gi)) // return the math elements in the array form

console.log(myString.includes("pradumna")) // wether it is present or not (true or false)

console.log(myString.startsWith("Hey")) // true or false (Boolean)
console.log(myString.startsWith("Hello")) 

console.log(myString.endsWith("india")) 
console.log(myString.endsWith("I", 16)) // Check in the 16 first characters 



