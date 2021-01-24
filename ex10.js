const readlineSync = require("readline-sync");

const spaceToStar = function(){
    const str = readlineSync.question("enter a string. ");
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result+=str[i].replace(" ", "*")
        } else {
            result+=str[i]
        }
    };
    return result
}
console.log(spaceToStar())