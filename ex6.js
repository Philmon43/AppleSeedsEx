const readlineSync = require("readline-sync");

let userInput = 0;

while (userInput <= 10) {
    userInput = parseInt(readlineSync.question("please choose a number larger than 10 "));
    if(!/^[0-9]+$/.test(userInput)){
        throw("Please enter only numbers");
    }
}

console.log("Thank you! :)")