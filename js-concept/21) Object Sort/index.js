const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

let shortedArray = cars.sort(function(a, b){return a.year - b.year});
console.log(shortedArray)