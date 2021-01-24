const readlineSync = require("readline-sync");

function primeNumber() {
    const number = parseInt(readlineSync.question("Enter a Number. "));
    for (let i = 1; i <= number; i++) {
        var prime = false;
        for (var x = 2; x <= i; x++) {
            if (i % x === 0 && x !== i) {
                prime = true;
            }
        }
        if (prime === false) {
            console.log(i);
        }
    }
};

primeNumber();