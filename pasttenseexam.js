// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const activity=document.getElementById("activity");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        
        question : "My father ____ a bike since 2002.",
        activity:"Choose the best answer ",
        choiceA : "was ridden",
        choiceB : "hasn't ridden",
        choiceC : "were riding",
        choiceD : "rode",
        correct : "B"
    },
    {
      
        question : "His family ____ abroad for three years",
        activity:"Choose the best answer ",
        choiceA : "lived",
        choiceB : "has lived",
        choiceC : "Just B is correct",
        choiceD : "A and B are possible",
        correct : "D"
    },
    {
        
        question : "We ____________ a walk when it started to snow.",
        activity:"Choose the best answer ",
        choiceA : "were taking",
        choiceB : "have taken",
        choiceC : "took",
        choiceD : "have taken",
        correct : "A"
    },
    {
        
        question : "When my wife returned home, I __________ the children to bed.",
        activity:"Choose the best answer ",
        choiceA : "putted",
        choiceB : "have already put",
        choiceC : "had already put",
        choiceD : "have putted",
        correct : "C"
    },
    {
        question : "When __________ Jack?",
        activity:"Choose the best answer ",
        choiceA : "did you call ",
        choiceB : "have you called",
        choiceC : "you called",
        choiceD : "were you calling",
        correct : "A"
    },
    {
        question : "__________ Sybil today?",
        activity:"Choose the best answer ",
        choiceA : "Have you seen",
        choiceB : "Have you see",
        choiceC : "Had you see",
        choiceD : "None of them",
        correct : "A"
    },
    {
        question : "__________ visited Australia?",
        activity:"Choose the best answer ",
        choiceA : "Have you ever",
        choiceB : "Did you ever",
        choiceC : "Did you been",
        choiceD : "Were you",
        correct : "A"
    },
    {
        question : "_________ your cellphone?",
        activity:"Choose the best answer ",
        choiceA : "Did you found",
        choiceB : "Did you ever",
        choiceC : "Have you found",
        choiceD : "None of them ",
        correct : "C"
    },
    {
        question : "What __________ when I called last night?",
        activity:"Choose the best answer ",
        choiceA : "was you doing",
        choiceB : "have you been doing",
        choiceC : "were you doing",
        choiceD : "had you doing",
        correct : "C"
    },
    {
        question : "I __________ my test at 17:00.",
        activity:"Choose the best answer ",
        choiceA : "finished",
        choiceB : "have finished",
        choiceC : "were finishing",
        choiceD : "A and C are possible",
        correct : "D"
    },
    {
        question : "You want to ask your friend how he spent his day yesterday. What do you say?",
        activity:"Choose the best answer ",
        choiceA : "What you did yesterday?",
        choiceB : "What did you did yesterday?",
        choiceC : "What did you do yesterday?",
        choiceD : "None of them",
        correct : "C"
    },
    {
        question : "When can we use past perfect and past simple together?",
        activity:"Choose the best answer ",
        choiceA : "to talk about two past events that happened at the same time",
        choiceB : "to talk about two events that happened on different days",
        choiceC : "to talk about two events and show which one happened first",
        choiceD : "to talk about an event in the past",
        correct : "C"
    },
    
    {
        question : "After I had eaten dinner, I watched a movie. What action happened first?",
        activity:"Choose the best answer ",
        choiceA : "It is impossible to know.",
        choiceB : "I ate dinner.",
        choiceC : "I watched a movie.",
        choiceD : "I watched a movie about dinosaurs eating dinner. ",
        correct : "B"
    },
    {
        question : "How long -------- Gerry?",
        activity:"Choose the best answer ",
        choiceA : "did you been know",
        choiceB : "did you know",
        choiceC : "How long have you been knowning Gerry?",
        choiceD : "How long have you known Gerry?",
        correct : "D"
    }
    


];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
   
    question.innerHTML = "<p>"+ q.question +"</p>";
    activity.innerHTML= "<p>"+ q.activity+"</p>";
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



















