// // intialize the count to 0
// // listen for the clicks on the increment button
// // incremnet the count vartable when the button is clicked
// // change the count-el in the HTML to reflect the new count

let countEl =  document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count =0
let saveMessage

function increment(){
    console.log("Clicked")
    count += 1
    countEl.textContent = count
}
function save(){
    saveEl.textContent += count + " - " // we use textcontent instaed of innertext because it only show humal redable elements
    countEl.textContent = 0
    count = 0
}


