let firstBatch =5 // let is data type
let SecondBatch = 6
let count = firstBatch +SecondBatch
console.log(count) // Use for printing 

let myCount = 20
myCount =21 // reassigning the value
myCount++ // increment operator
console.log(myCount)

let username ="saraf"
let message = "You have 3 notificatons"
console.log(username +", "+ message + "!") //concatenate

// String vs number

let name = 42
let bonousPoint = "10"
let total = name + bonousPoint
console.log(total)


let welcomeEl = document.getElementById("welcome-el")

let name ="Pradumna"
let greeting = "Welcome back! "
let message = greeting+ name

welcomeEl.innerHTML= message
welcomeEl.innerHTML += " 👋"


