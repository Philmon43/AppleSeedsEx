const readlineSync = require("readline-sync");

let numInstring = ["Zerro", "One","Two","Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

let convertNumToString = function(){
    let userNumber = parseInt(readlineSync.question("Please enter a number between 0-9 "));
    if(userNumber<10){
        console.log(numInstring[userNumber].toUpperCase())
    }else{
        console.log("Please use the instruction!")
    }
}

convertNumToString()