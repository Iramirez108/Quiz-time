//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

var questions =[
    {
        question: "commonly used data types DO NOT include?",
        choices:["a. strings", "b. booleans", "c.alerts", "d. numbers"],
        answer:"c. alerts",
    },

    {
        question:"the condition of an if/else statement is close by?",
        choices:["a. parenthesis","b. brackets", "c.quotes", "d. open parenthesis"],
        answer: "a. Parenthesis",
    },
    {
        question:"arrays in javascript can be used to store ___",
        choices:["a.numbers and string","b. other arrays","c. booleans","d. All of the above"],
        answer:"d. all of the above",
    },
    {
        question:"string values must be enclosed withing ___ whgen being assigned to variables.",
        choices:["a. commas", "b. curly brackets","c.quotes","d.parenthesis"],
        answer:"c:quotes",
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices:["a.Javascript","b.terminal/bash","c.for loops","d.consol log"],
        answer:"a. Javascript",
    }
];
