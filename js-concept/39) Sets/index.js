// A JavaScript Set is a collection of unique values.each value can only occur once in a Set.

// Create a Set
const letter = new Set(["a","b","c"]);

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.delete("c");
console.log(letter.has("a"))
console.log(letter.size)


letters.forEach (function(value) {
    console.log(value)
})

/*
or
letters.forEach (mfunction)

function mfunction(value) {
    console.log(value)
}
*/

// values() method - method returns a new iterator object containing all the values in a Set
console.log(letters.values())

for (const x of letters.values()) {
    console.log(x)
}
