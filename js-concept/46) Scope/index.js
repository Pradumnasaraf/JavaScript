//{  } - Scope

let x = 21  // GLOBAL SCOPE

{
    let x = 2;  
    var y = 2;
}
  // x can NOT be used here
  // y CAN be used here

function myFunction() {
    let x = 12 // Local Scope
}
function myFunction() {
    const carName = "Volvo";   // Function Scope
  }

