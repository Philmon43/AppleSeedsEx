const readlineSync = require("readline-sync");

function factrorial(){
    const userInpute = parseInt(readlineSync.question("Enter a number and i will calculate its factorial. "));
    let n = 1
    for(let i=1; i<= userInpute;i++){
        n*=i
    }
    return n
}

console.log(factrorial())