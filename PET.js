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
        question : "What is the girl going to bring for the picnic?",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "Which activity did they enjoy most during his holidays",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "C"
    },
    {
        question : "What homework does the girl have to do tonight? ",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "C"
    },
    {
        question : "Where did the students go on their school trip?",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "B"
    },
    {
        question : "Which present has the boy already bought ",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "C"
    },
    {
        question : "Where did the boy go with his family at the weekend ?",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "How will the girl get to her friend's house?",
        imgSrc : "img/patrick.gif",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "-",
        correct : "B"
    },
    {
        question : "You will hear two friends talking about a film they've just seen- Why didn't they boy enjoy the film?",
        imgSrc : "img/patrick.gif",
        choiceA : "it was very frightening",
        choiceB : "it lasted too long!",
        choiceC : "it had a terrible acting",
        choiceD : "-",
        correct : "C"
    },
    {
        question : "You will hear two friends talking about some biology homework. the girl suggests that the boy should",
        imgSrc : "img/patrick.gif",
        choiceA : "ask his teacher for help",
        choiceB : "get information from the internet",
        choiceC : "look in the biology textbook",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "You will hear two friends talking about an interview with a singer they've seen on TV-they agree that",
        imgSrc : "img/patrick.gif",
        choiceA : "the singer's answer were interesting",
        choiceB : "the interview was quite rude",
        choiceC : "the questions were boring",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "You will hear a girl telling her friend aboud a diving trip- How did the girl  feel about it?",
        imgSrc : "img/patrick.gif",
        choiceA : "sure she will go again",
        choiceB : "glad she went with a relative",
        choiceC : "pleased with her diving skills",
        choiceD : "-",
        correct : "B"
    },
    {
        question : "You will hear a girl talking to a friend about basketball. The girl is trying to ..",
        imgSrc : "img/patrick.gif",
        choiceA : "explain the rules of the game",
        choiceB : "describe a game she took part in ",
        choiceC : "encourage the boy to start playing",
        choiceD : "-",
        correct : "C"
    },
    
    {
        question : "You will hear a boy talking about a trip to a city with his family- Why did the boy's family get lost?",
        imgSrc : "img/patrick.gif",
        choiceA : "they couldn't understand their map",
        choiceB : "someone gave them the wrong direction",
        choiceC : "the guidebook contained incorrect information",
        choiceD : "-",
        correct : "B"
    }


];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 240; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
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
    
    imprimir=document.createElement('btn')
    imprimir.classList.add('print')
    imprimir.innerText='Click here to send results'
    
   scoreDiv.append(imprimir)
    imprimir.addEventListener('click',pdf)

    

    

   
}

function pdf(){
    window.print()
}




















