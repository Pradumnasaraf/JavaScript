// break - The break statement can also be used to jump out of a loop:

// continue - continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop

label: continueAt5, breakAt7

for (let i = 0; i < 10; i++) {
    if (i===5){
        continue 
    }

    if (i === 7) {
        break
    }
    console.log(i)
}
