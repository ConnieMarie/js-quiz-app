// define variables to be called upon
var questionText = document.getElementById("question-text");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");

//create array of questions with arrays of answer choices inside
questions = [
    {
        question: "Which of these examples is NOT a javascript data type?",
        answers: [
            {answerA: "Number", answer: false},
            {answerB: "Boolean", answer: false},
            {answerC: "Debugger", answer: true},
            {answerD: "String", answer: false},
        ]
    },
    {
        question: "Which of these statements is true?",
        answers: [
            {answerA: "2 === '2'", answer: false},
            {answerB: "x == y", answer: true},
            {answerC: "x === y", answer: false},
            {answerD: "4 != 4", answer: false},
        ]
    },
    {
        question: "In which ways can a JavaScript code be involvedin an HTML file?",
        answers: [
            {answerA: "Inline", answer: false},
            {answerB: "Internal", answer: false},        
            {answerC: "External", answer: false},
            {answerD: "All of the above", answer: true},
        ]    
    }
]

//add click events to control buttons
startBtn.addEventListener("click", start);
nextBtn.addEventListener("click", next);