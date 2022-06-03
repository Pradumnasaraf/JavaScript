let imageBox = document.getElementById("image-box")
console.log(imageBox)
let images = [ "dollar.png", "dollar.png", "dollar.png"]

imageString =""
for(i=0;i<images.length;i++){
  imageString += `<img class="team-img"src="${images[i]}">`
}
imageBox.innerHTML = imageString

