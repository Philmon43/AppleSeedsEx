const readlineSync = require("readline-sync");

const quizAboutAfrica = function () {
    let score = 0;
    const quiz=[
        {question: "is Africa", choises: ["A Country", "A Continent", "A State", "No Answer"], answer: 1},
        {question: "What is the name of the biggest lake in Africa?", choises: ["lake Victoria", "lake Tana of Ethiopia", "lake Tanganika", "lake Malawi"], answer: 0},
        {question: "how many countries in Africa?", choises: ["30", "49", "54", "47"], answer: 2},
        {question: "Which country is the most populated in Africa?", choises: ["Sudan", "Morocco", "Ethiopia", "Nigeria"], answer: 3},
        {question: "what is the biggest spoken langage in africa?", choises: ["Amharic", "Swahili", "Bantu", "Arabic"], answer: 1}
        
    ];
    const result= [
        {score: 20, message: "Congratulations you know Africa well, I am happy for you!  :)"},
        {score: 10, message: "Greate work, but i encourage you to seach more about Africa."},
        {score: 5, message: "Good please inprove your knowladge of Africa! "},
        {score: 0, message: " Sorry your knowladge of Africa is Zerro. :("}
    ];

    for (let i = 0; i < quiz.length; i+=1) {
        console.log(`
        # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
        #                                                               #
        #        Hello! welcome to the quiz about AFRICA!               #
        #                                                               #
                        question number ${i+1}                      
        #                                                               #
        # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
        `)
        const index = readlineSync.keyInSelect(quiz[i].choises, quiz[i].question, {
            cancel: false
        });
        
        if (index === quiz[i].answer) {
            score += 5;
        };
    };

    for(let i=0; i<result.length;i++){
        if(score >= result[i].score){
            console.log(`
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
            *                                                                     *
                ${result[i].message}
            *                                                                     *
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
            `);
            break;
        }
    }
};

quizAboutAfrica();