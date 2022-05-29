// JSON stands for JavaScript Object Notation, lightweight data interchange format
/*

{
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}

// JSON Data - A Name and a Value

"Name":"Value"
"firstName":"John"  

// JSON Objects - Just like in JavaScript, objects can contain multiple name/value pairs:

{"firstName":"John", "lastName":"Doe"}


// JSON Arrays

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]


*/

let text = '{ "employees" : [{ "firstName":"John" , "lastName":"Doe" }, { "firstName":"Anna" , "lastName":"Smith" },{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj)

let text1 = [{first:"pradumna", second:"Saraf"}]
let obj1 = JSON.stringify(text1)
console.log(obj1)

///// Array to String
let array =["Apple"]

array =JSON.stringify(array) //JSON.stringify() convert object to string
console.log(typeof array)
console.log( array)

array = JSON.parse(array) // JSON.parse() to convert the string into a JavaScript object:
array.push("Orange")
console.log(typeof array) //type of teel which type of variable it is
console.log( array)

