//////////////////////////////////////////// AND Operator - both
let hasCompletedCorse = true
let givesCertificate = true

if (hasCompletedCorse === true && givesCertificate === true){
    gernrateCertificate()
}

function gernrateCertificate(){
    console.log("Gernarting Certificate...")
}

let hasSolved = false
let hasHintsLeft = false

//if (!hasHintsLeft && !hasSolved){
//if (!(hasHintsLeft && hasSolved){
if (hasHintsLeft === false && hasSolved === false){
    showTheSolution()
}
function showTheSolution(){
    console.log("Showing the solution...")
}

//////////////////////////////////////////// OR Operator - of of these

let isOwner = true
let isMod = false

if (isMod || isOwner){
    console.log("You can add peoples to the group")
}

let dayOfMonth =13
let weekday = "Friday"

if (dayOfMonth===13 && weekday === "Friday"){
    console.log("😱")
}
