const readlineSync = require("readline-sync");

let quizAboutAfrica = function(){
    let score=0;
    let question=["is Africa?", "What is the name of the biggest lake in Africa?",  "how many countries in Africa?", "Which country is the most popular in Africa?", "what is the biggest spoken langage in africa?"];
    let answers = ["A Continent", "lake Victoria", "54", "Nigeria", "Swahili"];
    let choises = [
        ["A Country", "A Continent", "A State", "No Answer"], 
        ["lake Victoria","lake Tana of Ethiopia", "lake Tanganika" ,"lake Malawi"], 
        ["30","49", "54","47"],
        ["Sudan", "Morocco", "Ethiopia", "Nigeria"],
        ["Amharic", "Swahili", "Bantu", "Arabic"]
    ];
    let welcomPage = `
   
    `
    console.log(welcomPage);

    for(var i=0;i<5;i+=1){
        console.log(`
        # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
        #                                                               #
        #        Hello! welcome to the quiz about AFRICA!               #
        #                                                               #
                           question number ${i+1}                      
        #                                                               #
        # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
        `)
        let index = readlineSync.keyInSelect(choises[i], question[i], {cancel: false});
       if(choises[i][index]===answers[i]){
           score+=5
       };
    };

    if(score>20){
        console.log(`

        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        *                                                                     *
        *    Congratulations you know Africa well, I am happy for you!  :)    *
        *                                                                     *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        * 
        `);
    }else if(score>10&&score<=20){
        console.log(`

        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        *                                                                     *
        *    Greate work, but i encourage you to seach more about Africa.     *
        *                                                                     *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        * 
        `);
    }else if(score>=5&&score<=10){
        console.log(`

        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        *                                                                     *
        *         Good please inprove your knowladge of Africa!               *
        *                                                                     *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        * 
        `);
    }else{
        console.log(`

        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        *                                                                     *
        *             Sorry your knowladge of Africa is Zerro. :(             *
        *                                                                     *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
        * 
        `);
    }
};

quizAboutAfrica();