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


var timer = document.getElementById("Timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timeUp");

var totalTime = 75;
function newQuiz(){
    questionIndex = 0;
    totalTime = 75;
    timeLeft.textContent = totaltime;
    initialInput.textContent="";

    startDiv.style.display = "None";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function(){
        totalTime--;
        timeleft.textContent = totalTime;
        if(totalTime <=0){
            clearInterval(startTimer);
            if(questionIndex<question.lenght -1){
                gameover();
            }
        }
    },)
    showQuiz()
};



var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceA = document.getElementById("btn1");
var choiceA = document.getElementById("btn2");
var choiceA = document.getElementById("btn3");
var answerCheck = document.getElementById("answercheck");

function showQuiz(){
    nextQuestion();
}

function nextQuestion(){
    questionTitle.textContent = question[questionIndex].question;
    choiceA.textContent = question[questionIndex].choice[0];
    choiceB.textContent = question[questionIndex].choice[1];
    choiceC.textContent = question[questionIndex].choice[2];
    choiceD.textContent = question[questionIndex].choice[3];
}


var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

function checkAnswer(answer){

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.stlye.display = "block";

    if(questions[questionIndex].answer === questions[questionIndex].choices[answer]){
        correctAns++;
        answerCheck.textContent = "correct!";
        //console.log(correct)
    } else {
        totalTime = -10
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "wrong!"
    }
    questionIndex++;
    if(questionIndex<question.lenght){
        nextQuestion();
    }else {
        gameOver();
    }
}


function chooseA(){checkAnswer(0);}

function chooseB(){checkAnswer(1);}

function chooseC(){checkAnswer(2);}

function chooseD(){checkAnswer(3);}



function gameOver(){
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctAns;
}

function storeHighScores(event){
    event.preventDefault()

    if (initialInput.value === ""){
        alert("please enter your initials!");
        return;
    }
    startDivdiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHihgScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null){
        scoresArray = [];
    } else{
        scoresArray = JSON.parse(savedHighScores)
}
    var useScore = {
        initials: initialInput.value,
        score:finalScore.textContent
    };

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high Scores", ScoresArrayString);

    ShowHighScores();
}
