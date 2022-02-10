let randomNumber = Math.random()// gernrate bandom between 0 and 1 not including 1
console.log(randomNumber)   // 0.000 to 0.999999


let randomNumber1 = Math.random()*6 // 0.0000 to 5.99999
console.log(randomNumber1)

let flooredNumber = Math.floor(3.5666)// remove the decimals
console.log(flooredNumber)


/// Dice getting integer instaed of decimal value

let randomDice = Math.floor(Math.random()*6) +1
console.log(randomDice)

/////////////////// Dice Function
function rollADice(){
    let diceValue = Math.floor(Math.random()*6)+1
    return diceValue
}
console.log("Dice Value: "+ rollADice())