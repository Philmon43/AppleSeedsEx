const readlineSync = require("readline-sync");

let goodRestaurnat = function () {
    let KosherRestauran = ["Hamburger", "chicken sausage", "sabih"];
    let nonKosherRestaurants = ["Butler cheeseburger meal", "chicken nuggets meal", "republic cheeseburger meal"];
    let kashrutLemehadrin = ["Sea fish kebab", "Jewish salmon stew", "Barbonia salad"];
    let numPeople = parseInt(readlineSync.question("How many people are you going with? "));
    let isKosher = readlineSync.question("Should it be Kosher? y/n ");
    if (isKosher == "y") {
        let isKashrut = readlineSync.question("Should it be Kashrut lemehadrin? y/n ");
        if (isKashrut == "y") {
            let index = readlineSync.keyInSelect(kashrutLemehadrin, 'What kind of food do you want? ', {
                cancel: "no answer"
            });
            console.log("I recommend you Alternative, Armando or La Lasagna!");
        } else {
            let index = readlineSync.keyInSelect(KosherRestauran, 'What kind of food do you want? ', {
                cancel: "no answer"
            });
            console.log("I recommend you Goshen, Fleishman or The Chinese wall!");
        }
    } else {
        let index = readlineSync.keyInSelect(nonKosherRestaurants, 'What kind of food do you want? ', {
            cancel: "no answer"
        });
        console.log("I recommend you Vitrina, America burger or Humberger Gourment!");
    }
};

goodRestaurnat();