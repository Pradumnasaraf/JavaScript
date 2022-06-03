const d = new Date();
d.setFullYear(2020);
d.setFullYear(2020, 11, 4);
d.setMonth(10);
d.setDate(d.getDate() + 50);
d.setHours(22); // hours 0-23
d.setMinutes(30);
d.setSeconds(30);
console.log((d))


/// Comapring the Dates

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text)