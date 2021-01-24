const readlineSync = require("readline-sync");

let sumOfTen = function(){
    let num1 = readlineSync.question("Enter your first number ");
    let num2 = readlineSync.question("Enter your second number ");
    let sum = parseInt(num1) + parseInt(num2);
    if(sum==10){
        console.log("makes 10")
    }else{
        console.log("nope")
    }
}

sumOfTen();