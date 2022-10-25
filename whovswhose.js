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
        question : "______ in class?",
      
        choiceA : "",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "C"
    },
    {
        question : "_______ idea was it?",
       
        choiceA : "",
        choiceB : "whose",
        choiceC : "Who's",
        choiceD : "",
        correct : "B"
    },
    {
        question : "Guess _________ coming to dinner. ",
      
        choiceA : "whose",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "C"
    },
    {
        question : "_____ there?",
       
        choiceA : "",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "C"
    },
    {
        question : "He’s the man ________ opinion I respect.",
       
        choiceA : "Whose",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "A"
    },
    {
        question : "My roommate, ______ sister is a nurse, gets lots of good health advice.",
    
        choiceA : "whose",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "A"
    },
    {
        question : "A rabbit is an animal ________ fur changes color.",
      
        choiceA : "whose",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "A"
    },
    {
        question : "______ going to the party?",
     
        choiceA : "",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "C"
    },
    {
        question : "Here’s _________ hiring in Canada.",
       
        choiceA : "",
        choiceB : "who",
        choiceC : "Who's",
        choiceD : "",
        correct : "C"
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



















