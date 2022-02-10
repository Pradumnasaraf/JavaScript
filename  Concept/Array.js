// Arrray - ordered lists of item - conposite/ complex data types

let featurePost = [
    "Apple",            //0
    "Banana",          //1
    "Mango"           //2
]

console.log(featurePost[0])
console.log(featurePost.length)
console.log(featurePost.indexOf("Apple"))
console.log(featurePost.lastIndexOf("Mango"))

/////////////////////////////////////
let per =["Pradumna Saraf", 22, true]
per[2] = false
console.log(per[2])

////////////////////////
let list =[1,3,6,7]

list.push(9) // Add elements to the end of the array
list.push(9)

console.log(list)
////////////////////////////

let message = ["Hey", "Hi", "Yo"]
message.push("Hey There")
console.log(message)

message.pop() // remove last element of the array
console.log(message)

let largeCountries =["China", "India","USA","Indonesia","Pakistan"]

largeCountries.pop() // remove the elemnet from the end of the array
largeCountries.push("Pakistan")  // add a elemnt to the last of the array
largeCountries.shift()   // remove the 1st element in the array
largeCountries.unshift("China")  //add a element to the 1st


console.log(largeCountries)
