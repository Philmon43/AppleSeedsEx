const readlineSync = require("readline-sync");



console.log("***** -------- Wellcome To WAR ---------- *****")
const name = readlineSync.question("please enter your name: ");
if (name) {
    const playerOne = true;
    let playAgain = false;
    while (playerOne) {
        if (playAgain) {
            console.log("What would you like to do?\n1. play another round \n2. leave with my money ;)");
            const playMore = parseInt(readlineSync.question(""));
            if (playMore == 2) {
                console.log("Exiting..");
                break;
            }else if(playMore!=1&&playMore!=2){
                throw("choose 1 to play another round or 2 to leave with your money");
            }
        }
        const randomComputerNumber = Math.floor(Math.random() * 12 + 1);
        const randomPlayerNumber = Math.floor(Math.random() * 12 + 1);
        console.log("Hello " + name + " You currently have " + '50' + " shekels");
        let playeBet = parseInt(readlineSync.question("Place your bet for the next round: 1 - " + ' 50 ' + " "));
        if (playeBet <= 50) {
            if (randomComputerNumber > randomPlayerNumber) {
               playeBet== 50 - playeBet
                console.log("your card is " + randomPlayerNumber + " and my card is " + randomComputerNumber);
                console.log("you Lost " + playeBet + " and you have " + '50');
            } else if (randomComputerNumber < randomPlayerNumber) {
                playeBet == 50 + playeBet
                console.log("your card is " + randomPlayerNumber + " and my card is " + randomComputerNumber);
                console.log("you Won " + playeBet + " and you have " + '50');
            } else if (randomComputerNumber == randomPlayerNumber) {
                console.log("your card is " + randomPlayerNumber + " and my card is " + randomComputerNumber);
                console.log("it's a match ;)");
            }
        } else {
            console.log("I said between 1 - "+' 50 '+" and you typed " + playeBet + " \ni don't play with liars bye!!!");
            break;
        }
        playAgain = true
    }
    if (playerOne.shekels == 0) {
        console.log("You are broke.... bye bye");
    }
}