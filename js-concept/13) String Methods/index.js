// JavaScript treats primitive values as objects when executing methods and properties

let myString = "Hello I'm Pradumna Saraf, I like to develop Bots, Pradumna"

console.log(myString.length) // lenth of the string


console.log(myString.slice(10))
console.log(myString.slice(10,18)) // slice apart o the string (start index, end index-1), end index is not includede
console.log(myString.slice(-22,-8)) 

console.log(myString.substring(10,18)) //similar to slice but can't accpet negative value

console.log(myString.substr(10, 8)) // here second para define how much length of the string

console.log(myString.replace("Pradumna", "Pradumna V")) //replaces only the first match:

console.log(myString.replace(/PRADUMNA/i, "Pradumna V")) // /i will igonore case sensitive:

console.log(myString.replace(/Pradumna/g, "Pradumna V")) // /g global match, change the value everywhre.

console.log(myString.toLowerCase()) //all the char in the lowercase

console.log(myString.toUpperCase())//all the char in the uppercase

console.log(myString.charAt(2))

let mySplit = myString.split(" ")

for(i=0;i<mySplit.length; i++){
    console.log("PART-"+ i +" " +mySplit[i]) 
}

/// CONCAT ///

let string1 = "Hey!"
let string2 = "There"
let string3 = "I'm Pradumna Saraf"

console.log(string1.concat(" ",string2, " ", string3))

let text1 = "      Hello World!      ";
console.log(text1.trim());   // to remove extra white sapces (surround)


