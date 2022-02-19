function greetUser(emoji,greeting, age){

    console.log(`Hey!${emoji} how are you ${greeting}, you are ${age} years old`)
}

greetUser("👋","Pradumna Saraf", 22)

function addNumers(num1, num2){ //parameters
    return num1+num2
}
console.log(addNumers(3,4))
console.log(addNumers(113,24)) //arguments


function getFirst (arr){  // only take the array as a input
    return arr[0]
}
console.log(getFirst([1,2,3]))


function getFirst (arr){  
    return arr[0]
}
console.log(getFirst([1,2,3]))

function genrateSetense(desc, arr){
    let message = `The ${arr.length} ${desc} are `
    for(i=0;i<arr.length;i++){
        if(i===arr.length-1){
            message += arr[i]
        }else{
            message += arr[i]+", "
        }
        
    }
    return message
}
console.log(genrateSetense("best countires",["INDIA", "CHINA", "USA"]))