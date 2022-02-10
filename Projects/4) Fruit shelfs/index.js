let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

let fruits =["🍊", "🍎","🍊", "🍊", "🍎", "🍎","🍊"]

function sortFruit(){
    for(let i=0; i<fruits.length;i++){
        getFruit = fruits[i]
        if(getFruit ==="🍊"){
            orangeShelf.textContent += "🍊 "
        }
        else if(getFruit ==="🍎"){
            appleShelf.textContent += "🍎 "
        }
    }
}
sortFruit()




















