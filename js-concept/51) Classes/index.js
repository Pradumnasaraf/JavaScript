class Person {   //  creates a class named "Car".

    constructor(yourName, age) {// Executed automatically when a new object is created

        this.yourName =yourName //// two properties yourName and age
        this.age =age
    }
    ages(x) {
        return x;
    }
}

let myCar1 = new Person("Pradumna", 22);

console.log(myCar1.age)
console.log(myCar1.yourName)
console.log(myCar1.ages(12))