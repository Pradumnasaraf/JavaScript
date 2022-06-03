// A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits.get("apples"))
console.log(fruits.size)
fruits.delete("apples");
fruits.has("apples");

console.log(fruits.entries())

for (const x of fruits.entries()) {
    console.log(x)
}

fruits.forEach (function(value, key) {
    console.group(key + ' = ' + value)
})
