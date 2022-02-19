const credits = 0

if(credits){
    console.log("Let's Play!")
}else{
    console.log("Sorry, you have no credits!")
}

/// Truty and falsy


//////// Falsy values

// false
// 0
// ""
// null
// undestand
// NaN

let value = null
value = 25
console.log(value)

let trueorfalse = Boolean(-0) //False
console.log(trueorfalse)

trueorfalse =Boolean(0)
console.log(trueorfalse)

trueorfalse =Boolean("")
console.log(trueorfalse)

trueorfalse =Boolean("11") //True
console.log(trueorfalse)

trueorfalse =Boolean(null) //False
console.log(trueorfalse)

trueorfalse =Boolean([0]) //True
console.log(trueorfalse)
