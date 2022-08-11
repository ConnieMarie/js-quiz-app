// define variables to be called upon
var questionText = document.getElementById("question-text");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var startBtn = document.querySelector("#start-btn");
var timerEl = document.getElementById("timer");
var qIndex = 0
var isCorrect = true;
let timer;
let score;



//create array of objects defining questions and answer choices
var questions = [
    {
        questionText: "Which of these examples is NOT a javascript data type?",
        answerChoices: ["Number", "Boolean", "Debugger", "String"],
        correctAnswer: "Debugger",
    },

    {
        questionText: "Which of these statements is true?",
        answerChoices: ["2 === '2'", "'x' == 'y'", "x === y", "4 != 4"],
        correctAnswer: "'x' == 'y'",
    },
    {
        questionText: "In which ways can a JavaScript code be involvedin an HTML file?",
        answerChoices: ["Inline", "Internal", "External", "All of the above"],    
        correctAnswer: "All of the above",
    },
    {
        questionText: "Which statement cannot be used to declare a variable in JavaScript?",
        answerChoices: ["Let", "Var", "Int", "Const"],
        correctAnswer: "Int",
    },
    {
        questionText: "Which operator is used to assign a value to a variable?",
        answerChoices: ["*", "=", "+", "X"],
        correctAnswer: "=",
     },
    {
        questionText: "Which event occurs when the user clicks on an HTML element?",
        answerChoices: ["onclick", "onmouseover", "onmouseclick", "onchange"],
        correctAnswer: "onclick",
     },
];

//add click events to control buttons
startBtn.addEventListener("click", startQuiz);
answerA.addEventListener("click", next);
answerB.addEventListener("click", next);
answerC.addEventListener("click", next);
answerD.addEventListener("click", next);
//creat functions to dispay questions and answer choices
//add if statements to indicate when correct or incorrect answers are chosen

//define function to start timer/decrement time from timer
//define function to show first question after clicking start
function startQuiz() {
    window.startTime = 30
    timer = setInterval(() => {
       startTime--;
    //    console.log(startTime);
       timerEl.textContent = startTime
       if (startTime <= 0){
        endQuiz();
       }
      }, 1000);
//** start button restarts timer */
//** need a function to end quiz when all questions have been asked or timer runs out */


    questionText.innerHTML = (questions[qIndex].questionText);
    answerA.innerHTML = (questions[qIndex].answerChoices[0]);
    answerB.innerHTML = (questions[qIndex].answerChoices[1]);
    answerC.innerHTML = (questions[qIndex].answerChoices[2]);
    answerD.innerHTML = (questions[qIndex].answerChoices[3]);
};
//define function to show next question when answer is selected
function next(e) {
   
    //statement to indicate correct/incorrect answer
    if (e.target.innerHTML===questions[qIndex].correctAnswer){
        isCorrect = true
    } else {
        isCorrect = false
        window.startTime -= 10

    };
    qIndex++
    

    // console.log(questions[qIndex-1].correctAnswer)
    // console.log(e.target.innerHTML)
    if (qIndex < questions.length) {
    questionText.innerHTML = (questions[qIndex].questionText);
    answerA.innerHTML = (questions[qIndex].answerChoices[0]);
    answerB.innerHTML = (questions[qIndex].answerChoices[1]);
    answerC.innerHTML = (questions[qIndex].answerChoices[2]);
    answerD.innerHTML = (questions[qIndex].answerChoices[3]);

    } else {
        endQuiz()
    };

    //define function to end quiz when last answer is selected

};

function endQuiz() {
    clearInterval(timer)

//  console.log("All done!")
};


//add form to enter initials for highscore
//define function to store highcore
//start score = 0
//
