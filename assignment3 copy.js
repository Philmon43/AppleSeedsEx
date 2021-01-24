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
const isValidGuess = function (guess) {
    return !(/[^a-zA-Z]/.test(guess) || guess.length != 1)
};
const main = function () {
    const word = faker.random.word(1).toLowerCase();
    let guesse = 10;
    const userTried = [];
    const updateAsterisks = () => word.split("").map(letter => userTried.includes(letter)?letter: "*").join("");
    let asterisk = updateAsterisks();
    

    console.log("Wellcome To Hangman!!!!");
    while (guesse > 0) {
        if (word == asterisk) {
            break
        };

        console.log("\nYou have " + guesse + " guesses");
        console.log("The word is: \n" + asterisk);
        const userGuess = readlineSync.question("What is your guess? ").toLocaleLowerCase();
        if (!isValidGuess(userGuess)) {
            readlineSync.question("\nPlease check your input you must enter an alphabet and it must be one at a time:) enter to continue ");
        } else if (userTried.includes(userGuess)) {
            readlineSync.question("\nHey i Think You allready tried '" + userGuess + "' please choose another alphabet enter to continue ")
        } else {
            asterisk = updateAsterisks();
            userTried.push(userGuess);
            guesse--
        }
    }

    if (asterisk != word) {
        asterisk = readlineSync.question("\nHey this is you last chance Can you guess the whole word: ");
    }
    if (asterisk == word) {
        console.log("Conguratulations you got the answer \nthe word is: " + asterisk);
    } else {
        console.log("Sorry you did not succeed\nThe word is " + word);
    }
}