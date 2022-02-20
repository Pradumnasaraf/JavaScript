const d = new Date("2015-03-25");
const e = new Date("2015-03");
const f = new Date("2015");
console.log(d)

// ISO Date(YYYY-MM-DDTHH:MM:SSZ): Date and time is separated with a capital T.
//UTC time is defined with a capital letter Z.

// SHORT DATE FORMAT
const aa = new Date("03/25/2015");
const dd = new Date("2015-03-25");

// const d = new Date("2015/03/25"); Error
// const d = new Date("25-03-2015"); //Error
console.log(aa)
console.log(dd)

//LONG DATES

const de = new Date("Mar 25 2015");
console.log(de)

//Date Input - Parsing Dates

let msec = Date.parse("March 21, 2012");
const ddd = new Date(msec);
console.log(ddd)