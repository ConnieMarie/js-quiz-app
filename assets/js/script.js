// define variables to be called upon
var questionText = document.getElementById("question-text");
var choices = document.getElementById("choices");
// var answerA = document.getElementById("answer-a");
// var answerB = document.getElementById("answer-b");
// var answerC = document.getElementById("answer-c");
// var answerD = document.getElementById("answer-d");
var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");





//create array of objects defining questions and answer choices
var questions = [
    {
        questionText: "Which of these examples is NOT a javascript data type?",
        answerChoices: ["Number", "Boolean", "Debugger", "String"],
        correctAnswer: "Debugger"
    },

    {
        questionText: "Which of these statements is true?",
        correctAnswer: answerB,
        answerChoices: [{answerA: "2 === '2'"}, {answerB: "x == y"}, {answerC: "x === y"}, {answerD: "4 != 4"}]
    },
    {
        questionText: "In which ways can a JavaScript code be involvedin an HTML file?",
        correctAnswer: answerD,
        answerChoices: [{answerA: "Inline"}, {answerB: "Internal"}, {answerC: "External"}, {answerD: "All of the above"}]    
    },
    {
        questionText: "Inside which HTML element do we put the JavaScript?",
        correctAnswer: answerC,
        answerChoices: [{answerA: "<scripting>"}, {answerB: "<js>"}, {answerC: "<script>"}, {answerD: "<javascript>"}]
    },
    {
        questionText: "Which operator is used to assign a value to a variable?",
        correctAnswer: answerB,
        answerChoices: [{answerA: "*"}, {answerB: "="}, {answerC: "+"}, {answerD: "X"}]
    },
    {
        questionText: "Which event occurs when the user clicks on an HTML element?",
        correctAnswer: answerA,
        answerChoices: [{answerA: "onclick"}, {answerB: "onmouseover"}, {answerC: "onmouseclick"}, {answerD: "onchange"}]
    },
]

//add click events to control buttons
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", next);
//creat functions to dispay questions and answer choices
//add if statements to indicate when correct or incorrect answers are chosen

//add localStorage to store highscore

//define function to start timer/decrement time from timer
//function startTimer(){}


//define function to show first question after clicking start
function startQuiz() {
    var firstQ = (questions[0].questionText);
    // var firstA = (questions[0].answerChoices);

    questionText.innerHTML = (firstQ);
    // choices.innerHTML = (firstA);
    // var button = document.createElement("button");
    // button.type = "button";
    // button.innerHTML = "answer-choices";
    // button.className = "choices";

    

    // var choices = document.getElementById("choices");
    // choices.appendChild(button);
};
//define function to show next question when nextbtn is clicked
//function next() {}


//define funtion to show questions
// function showQuestions() {
//     for (i = 0; i < questions.length; i++) {
//         (questions += questionText * i);
    
// }

startBtn.onclick = startQuiz() 
    showQuestions(questionText);
    console.log("clicked");
    

nextBtn.onclick = next()
        showQuestions(questions);
        console.log("clicked");


