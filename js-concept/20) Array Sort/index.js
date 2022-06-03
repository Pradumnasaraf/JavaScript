const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()) // sorts an array alphabetically

fruits.reverse(); // reverse the sorted Array
console.log(fruits)

const points = [40, 100, 1, 5, 25, 10];

// ACESENDING 
points.sort(function(a, b){return a - b});
console.log(points)
points[0]// samllest element of the array
points[1]// largest element of the array

// if -ve (40 - 100) = -60 then a will come first
// if +ve (25 - 10) = 15 then b will come first
// if 0 nothing will change

// DESENDING 
points.sort(function(a, b){return b - a});
console.log(points)


const myArray = [1,2,4,3,6]

//  Math.max() on an Array
console.log(Math.max.apply(null, myArray ))

//  Math.min() on an Array
console.log(Math.min.apply(null, myArray ))

for(i=0;i<myArray.length;i++){
    
}
