// = new Date( year, month, day, hour, minute, second, millisecond)
// Note: JavaScript counts months from 0 to 11: January = 0. December = 11.

const d = new Date();
console.log(d)

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year: 11 +4 (April)
const e = new Date(1999, 15, 24, 10, 33, 30);

// If we supply only one parameter it will be treated as milliseconds.
const f = new Date(2020)

// Previous Century One and two digit years will be interpreted as 19xx:
const g = new Date(99, 11, 24);


///new Date(dateString)

//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
const dd = new Date("October 13, 2014 11:13:00");

// new Date(milliseconds)

// One day (24 hours) is 86 400 000 milliseconds.
const da = new Date(100000000000); //01 January 1970 plus 100 000 000 000 milliseconds 

//
const aa = new Date();
console.log(aa)
console.log(aa.toString()); //by Default
console.log(aa.toUTCString());
console.log(aa.toISOString()); // "2015-03-25"
console.log(aa.toDateString());


