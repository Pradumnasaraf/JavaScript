const cars = ["Saab", "Volvo", "BMW"];

// cars=["Honda","BMW","AUDI"] ERROR: Cant be reassigned.

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

///////////////////////const BLOCK SCOPE- var dosen't//////////////////////////////////////

const cars2 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars2 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

///////////////////////////////////////
const cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Volvo", "BMW"];   // Not allowed
cars = ["Volvo", "BMW"];       // Not allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}