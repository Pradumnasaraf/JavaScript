number1 =10
number2 = 20

document.getElementById("num1-el").textContent = number1
document.getElementById("num2-el").textContent = number2
let sumEl = document.getElementById("sum-el")

function add(){
   let result = number1 +number2
   sumEl.textContent = "Result: "+result
}
function mul(){
    let result = number1*number2
    sumEl.textContent = "Result: "+result
}
function sub(){
    let result = number1-number2
    sumEl.textContent = "Result: "+result

}
function div(){
    let result = number1/number2
    sumEl.textContent = "Result: "+result
}

