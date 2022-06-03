// perform different actions for different decisions.

/*
if (condition1) {
     block of code to be executed if condition1 is true
} else if (condition2) {
  block of code to be executed if the condition1 is false and condition2 is true
} else {
  block of code to be executed if the condition1 is false and condition2 is false
}
*/

let myAge = 19
if(myAge<18){
    console.log("NO!, you can't go in")
} else if(myAge==18){
    console.log("You're lucky, you just became elegible")
}else{
    console.log("you are elegible for a long time")
}

////// SWICH STATEMENT - Note - Switch cases use strict comparison (===).

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;                        // break breaks out of the switch block.
    case 0:
      text = "Today is Sunday";
      break;
    default:                                        // if none of them excuted, default will
      text = "Looking forward to the Weekend";
}

// common code block

switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
}
