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
        question : "What does Jenny say about the last six months of her life?",
        imgSrc : "img/patrick.gif",
        choiceA : "She's been incredibly busy.",
        choiceB : "She feels she doesn't belong in this showbiz world.",
        choiceC : "She's had too much to learn.",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "Why does Jenny use the football metaphor when talking about the cast of her new movie?",
        imgSrc : "img/patrick.gif",
        choiceA : "to show how hard they have all been working on the film.",
        choiceB : "to give an idea of teamwork.",
        choiceC : "to say something about the plot of the film.",
        choiceD : "-",
        correct : "B"
    },
    {
        question : "And how does she view her role in the football team when asked?",
        imgSrc : "img/patrick.gif",
        choiceA : "a minor, supporting role.",
        choiceB : "the mother of the group.",
        choiceC : "the serious one.",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "How did she find working with a famous actor on the film set?",
        imgSrc : "img/patrick.gif",
        choiceA : "she was determined not to let it affect her work.",
        choiceB : "she didn't find him very professional.",
        choiceC : "she felt relaxed around him.",
        choiceD : "-",
        correct : "C"
    },
    {
        question : "Why is Jenny happy that she will be New York in a month's time?",
        imgSrc : "img/patrick.gif",
        choiceA : "she doesn't like working in Chicago.",
        choiceB : "family commitments make things difficult for her.",
        choiceC : "her husband and daughter don't like living in Chicago.",
        choiceD : "-",
        correct : "B"
    },
    {
        question : "Why was Jenny criticized for her comments about Broadway?",
        imgSrc : "img/patrick.gif",
        choiceA : "she shouldn't have criticized something she profits off herself.",
        choiceB : " she was only repeating something she had previously stated.",
        choiceC : "she was too aggressive in her comments about Broadway.",
        choiceD : "-",
        correct : "A"
    },
    {
        question : "What was, and is, at the heart of Jenny's criticism of Broadway?",
        imgSrc : "img/patrick.gif",
        choiceA : "she wants equal pay for women.",
        choiceB : " there aren't enough women working on Broadway.",
        choiceC : "women should be given as many top roles as men are.",
        choiceD : "-",
        correct : "C"
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




















