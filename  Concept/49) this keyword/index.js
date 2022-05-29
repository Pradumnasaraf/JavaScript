const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    myFunction : function() {
        return this;
      }
};
//the this keyword refers to an object, Which object depends on how this is being invoked (used or called).
console.log(person.fullName())
console.log(person.myFunction())

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);