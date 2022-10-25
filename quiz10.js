// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "I hope I __________ the correct answer.",
      
        choiceA : "choice",
        choiceB : "chosen",
        choiceC : "choose",
        choiceD : "chosed",
        correct : "C"
    },
    {
        question : "You did a _______ job!",
       
        choiceA : "well",
        choiceB : "good",
        choiceC : "bestie ",
        choiceD : "godly",
        correct : "B"
    },
    {
        question : "If _______ not playing the game, I’m not playing the game.",
      
        choiceA : "they're",
        choiceB : "their",
        choiceC : "there",
        choiceD : "They",
        correct : "A"
    },
    {
        question : "This calculator _________ well.",
       
        choiceA : "work",
        choiceB : "doesn't works",
        choiceC : "works",
        choiceD : "homeworks",
        correct : "C"
    },
    {
        question : "This is ______ award.",
       
        choiceA : "your",
        choiceB : "you're",
        choiceC : "you",
        choiceD : "you is",
        correct : "A"
    },
    {
        question : "Trucks are bigger _______ cars.",
    
        choiceA : "then",
        choiceB : "that",
        choiceC : "than",
        choiceD : "what",
        correct : "C"
    },
    {
        question : "This question is very _______.",
      
        choiceA : "difficulty",
        choiceB : "hardly",
        choiceC : "hard",
        choiceD : "difficultyly",
        correct : "C"
    },
    {
        question : "He lost it, ______ he found it.",
     
        choiceA : "that",
        choiceB : "then",
        choiceC : "than",
        choiceD : "None of them ",
        correct : "B"
    },
    {
        question : "Did you do _______ on your quiz?",
       
        choiceA : "godly",
        choiceB : "good",
        choiceC : "well",
        choiceD : "wellly",
        correct : "C"
    },
    {
        question : "You have ____________ daughter.",
   
        choiceA : "most beautiful",
        choiceB : "the most beautiful",
        choiceC : "the most beautifullest",
        choiceD : "the beauty",
        correct : "B"
    },
    {
        question : "I like him more _______ her.",
       
        choiceA : "what",
        choiceB : "that",
        choiceC : "thent",
        choiceD : "than",
        correct : "D"
    },
    {
        question : "I do not know which one I should __________.",
    
        choiceA : "lost",
        choiceB : "chose",
        choiceC : "choose",
        choiceD : "lose",
        correct : "C"
    },
    
    {
        question : "He is ______________ than me at speaking English.",
     
        choiceA : "gooder",
        choiceB : "better",
        choiceC : "more good",
        choiceD : "None of them ",
        correct : "B"
    }

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 40; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
 
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        Swal.fire({
            icon:'success',
            text: 'Correct',
           
          })
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        Swal.fire({
            icon:'error',
            title: 'Incorrect',
  
          })
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    let scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.gif" :
              (scorePerCent >= 60) ? "img/4.gif" :
              (scorePerCent >= 40) ? "img/3.gif" :
              (scorePerCent >= 20) ? "img/2.gif" :
              "img/1.gif";
   scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    
    

    

    

   
}



















