let person ={
    name:"Pradumna",
    age:22,
    country:"India"
}

function logData(){
    message = person.name+ " is " + person.age + " years old and lives in " + person.country
    console.log(message)
}
logData()

let age = 17
let discountMessage =""

if(age<6){
    discountMessage ="FREE"
}
else if(age<18){
    discountMessage = "Child Discount"
}
else if(age<27){
    discountMessage = "Student Discount"
}
else if(age<67){
    discountMessage = "Full Price"
}
else{
    discountMessage = "Senor Citizen Discount"
}

console.log(discountMessage)

let largeCountries =["China", "India","USA","Indonesia","Pakistan"]
console.log("The 5 largest counties in the world")
for(let i=0; i<largeCountries.length;i++ ){
    console.log("- "+largeCountries[i])
}



