let player1Time = 120
let player2Time = 100

function getFastest(){
    if(player1Time<player2Time){
        return  player2Time
    }
    else if(player1Time>player2Time){
        return  player1Time
    }
    else{
        return player1Time
    }
}
console.log(getFastest())

function totalTime(){
    return player1Time+player2Time
}
console.log(totalTime())
