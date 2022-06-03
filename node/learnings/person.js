const person = {
    name:'Pradumna',
    age:'12'
}
class People{
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name is ${this.firstName} and age is ${this.age}.`)
    }
}
module.exports = People
