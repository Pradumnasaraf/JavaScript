/* Redeclared is not possible in let but in var we can do that

let myName = "Pradumna Saraf"
let myName =1
*/

var Name = "Pradumna Saraf"
var Name =1


/// LET HAVE BLOCK SCOPE

{
    let x = 2;
}
  // x can NOT be used here



//// THIS IS NOT RECOMMEND TO USE - var has global aceess level -out of the scope


{
    var x = 10;
    // Here x is 10

    {
    var x = 2;
    // Here x is 2
    }

    // Here x is 2
}

//// THIS IS RECOMMEND - let have scope acess level

{

    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10
}