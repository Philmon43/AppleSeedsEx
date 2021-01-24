const readlineSync = require("readline-sync");

let goodRestaurnat = function () {
    const questions = ["How many people are you going with? ", "Should it be Kosher? y/n ", "Should it be Kashrut lemehadrin? y/n ", "What kind of food do you want? "];
    const numOfPeople = parseInt(readlineSync.question(questions[0]));
    const errMessage = "stop execution";
    const foods = ["Vegetables", "Pizza", "Hamburger", "Shawarma", "sabih", "Shakshuka"];
    if(isNaN(numOfPeople) || numOfPeople<=0){
        throw(errMessage);
    }else{
        const isKosher = readlineSync.question("Should it be Kosher? y/n ").toLowerCase();
        if(isKosher != "y" && isKosher != "n"){
            throw(errMessage)
        }else if(isKosher == "y"){
            const isKashrutLemehadrin = readlineSync.question("Should it be Kashrut lemehadrin? y/n ").toLowerCase();
            if(isKashrutLemehadrin != "y" && isKashrutLemehadrin != "n"){
                throw(errMessage)
            }else{
                if(isKashrutLemehadrin == "y"){
                    readlineSync.keyInSelect(foods, questions[3], {cancel: false});
                    console.log("I recommend you Alternative, Armando or La Lasagna!")
                }else{
                    readlineSync.keyInSelect(foods, questions[3], {cancel: false});
                    console.log("I recommend you Goshen, Fleishman or The Chinese wall!")
                }
            }
        }else{
            readlineSync.keyInSelect(foods, questions[3], {cancel: false});
            console.log("I recommend you Vitrina, America burger or Humberger Gourment!")
        }
    };
};

goodRestaurnat();