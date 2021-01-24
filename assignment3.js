const figlet = require("figlet");
const faker = require("faker");
const readlineSync = require("readline-sync");

figlet('Hang Man', {
    font: 'Twisted',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    main()
});
const main = function () {
    const word = faker.random.word(1).toLowerCase();
    let guesse = 10;
    let asteriskArr = [];
    let asterisk;
    let userTried = "";
    for (let i = 0; i < word.length; i++) {
        asteriskArr.push("*");
    };
    const alphabetChecker = function (letter) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == letter) {
                asteriskArr[i] = letter
            }
        }
    }
    console.log("Wellcome To Hangman!!!!");
    while (guesse != -1) {
        asterisk = asteriskArr.join("");
        if (word == asterisk) {
            break
        };

        if (guesse == 0) {
            if (word == asterisk) {
                break
            };
            console.log("\nYou have " + guesse + " guesses");
            console.log("The word is: \n" + asterisk);
            let lastChance = readlineSync.question("\nHey this is you last chance Can you guess the whole word: ");
            asterisk = lastChance
            break
        }
        console.log("\nYou have " + guesse + " guesses");
        console.log("The word is: \n" + asterisk);
        const userGuess = readlineSync.question("What is your guess? ").toLocaleLowerCase();
        if (/[^a-zA-Z]/.test(userGuess) || userGuess.length != 1) {
            readlineSync.question("\nPlease check your input you must enter an alphabet and it must be one at a time:) enter to continue ");
        } else if (userTried.includes(userGuess)) {
            readlineSync.question("\nHey i Think You allready tried '" + userGuess + "' please choose another alphabet enter to continue ")
        } else {
            alphabetChecker(userGuess);
            userTried += userGuess
            guesse--
        }
    }
    if (asterisk != word) {
        console.log("Sorry you did not succeed\nThe word is " + word)
    } else {
        console.log("Conguratulations you got the answer \nthe word is: " + asterisk);
    }
}