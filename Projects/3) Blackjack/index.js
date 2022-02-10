let cards =[] // array - ordered list of item
let sum = 0
let hasBlackJack = false
let isAlive = false
let message =""

// Player Object
let player ={
    name : "Pradumna", // name is key and "Pradumna" is value
    chips : 150
}

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // much broader than Id selector
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $"+ player.chips
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard===1){
        return 11;
    }
    else if (randomCard > 10){
        return 10;
    }
    else{
        return randomCard
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard +secondCard
    isAlive = true
    renderGame()
}

function renderGame(){

   // cardsEl.textContent= "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent= "Cards: " 
    for (i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You got BlackJack!!"
        hasBlackJack = true
    }
    else{
        message= "You are out of the game"
        isAlive = false
       
    }
   messageEl.textContent = message
}
function newCard(){
   // if (isAlive === true && hasBlackJack === false){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        //add card add the end of the array
        cards.push(card)
        renderGame()
    }  

}


