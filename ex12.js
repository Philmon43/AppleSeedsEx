const readlineSync = require("readline-sync");

const userInput = readlineSync.question("Enter a String ");
const vowels = ["a", "e", "i", "o", "u", "y"];
let result = ''

for (let i=0; i<userInput.length;i++) {
   if(vowels.includes(userInput[i])){
       result+=userInput[i].toUpperCase();
   }else{
        result+=userInput[i];
   }
}

console.log(result)