for (let count =1; count<11; count+=1){

    console.log(count)
}

for (let count =10; count<=100; count+=10){

    console.log(count)
}
/////////// For loops with the array

let message = ["Hey", "Hi", "Yo", "Hola"]

for (let i =0; i<message.length; i+=1){

    console.log(message[i])
}
/////////////////////////////////////
let cards = [7,3,8]

for (i =0; i<cards.length;i++){
    console.log(cards[i])
}

////////////////

let welcome = ["Hey", "Hi", "Yo", "Hola"]

let finalMessage =""
for (let i =0; i<message.length; i+=1){
    finalMessage += welcome[i]+", "

}
console.log(finalMessage)