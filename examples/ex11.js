const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a string if its a Palindrome  ")

let resversed = "";
for(let i=string.length-1; i>=0;i--){
    resversed+=string[i]
}

if(resversed === string){
    console.log(string+" is a Palindrome");
}else{
    console.log(string+" is not Palindrome")
}