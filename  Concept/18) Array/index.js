// Arrray - ordered lists of item - conposite/ complex data types

const cars = ["Saab", "Volvo", "BMW"]; //It is a common practice to declare arrays with the const keyword.

const carrs = new Array("Saab", "Volvo", "BMW");

// these two are different
const pointss = new Array(40);  // Create an array with 40 undefined elements:
const points = [40]; // Create an array with one element - 40:

const featurePost = [
    "Apple",            //0
    "Banana",          //1
    "Mango"           //2
]

featurePost[3] = "Melon" // Adding the elements
featurePost[1] ="Grapes" // Reassign the value
featurePost[featurePost.length] = "Mango"

console.log(featurePost)
console.log(typeof featurePost) //type
console.log(Array.isArray(featurePost)) // checking if its arraay or not
console.log(featurePost.length) // length
console.log(featurePost[0]) // Accessing the first element
console.log(featurePost[featurePost.length -1]) // Accessing the last element
console.log(featurePost.indexOf("Apple")) ///array.indexOf(item, start)
console.log(featurePost.lastIndexOf("Mango")) //array.lastIndexOf(item, start)
console.log(featurePost.includes("Mango")); // is true

/////////////////////////////////////
let per =["Pradumna Saraf", 22, true]
per[2] = false

per[5]= 12 //This will create holes
console.log(per[2])

/* Difference Between Arrays and Objects 

You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

*/





