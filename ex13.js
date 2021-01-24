const readlineSync = require("readline-sync");
const userInput = readlineSync.question("Enter a sentences and i will give you the longest word. ");

const userStrArr = userInput.split(" ")
let longest = 0
let word = ""

for(let i=0;i<userStrArr.length;i++){
    if(userStrArr[i].length>longest && /^[a-zA-Z]+$/.test(userStrArr[i])){
        longest=userStrArr[i].length;
        word = userStrArr[i]
    }
}

console.log(word)
