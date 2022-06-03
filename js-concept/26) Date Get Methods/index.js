const myDate = new Date();

console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDate())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())
console.log(myDate.getDay())

// MONTH getMonth()
// For getting month name we can use this trick, 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[myDate.getMonth()];
console.log(month)

console.log(myDate.getMonth()) // without it 0-11

/// DAY getDay()
//  For getting the day name, we can use this,  
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[myDate.getDay()];
console.log(day)

console.log(myDate.getDay()) // without it 0-6


//////////////// get UTC METHODS ///////////

console.log(myDate.getUTCDate())