// Math.random() always returns a number lower than 1.

console.log(Math.random()) //returns a random number between 0 (inclusive), and 1 (exclusive)
// 0.000 to 0.999999

// We can use floor function to return string

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10); 

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 11);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) +1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(9500,10000))