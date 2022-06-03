// Avoid Global Variables


//Declarations on Top

// Initialize Variables
let firstName = ""
let lastName = ""
let price = 0;

//Declare Objects with const

let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string (to avoid this use const)

// Declare Arrays with const
let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number

// Beware of Automatic Type Conversions

