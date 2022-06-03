// Arrow functions allow us to write shorter function syntax:

// Before:

function sayhello(){
    return "Hello"
}

// With Arrow Function:

let sayhello1 = () => {  // function() becomes = ()
    return "Hello"
}

// Arrow Functions Return Value (It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:)

let sayhello2 = () => "Hello"


console.log(sayhello())
console.log(sayhello1())
console.log(sayhello2()) 


///////////////////////////////////////////////////

//Before

function heyYou1(name){
    console.log("Hey "+ name)
}

// Arrow Function With Parameters:

let heyYou = (name) => console.log("Hey " + name)

heyYou("Pradumna")
heyYou1("Pradumna")