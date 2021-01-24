const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter a string if its a Palindrome  ")

const isPalindrom = function(s){
    if(s.length <= 1){
        return true
    }
    let shortVersion = s.substring(1, s.length-1)
    return s[0] == s.substr(s.length-1) && isPalindrom(shortVersion)
};

console.log(isPalindrom(string));