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

let questions = [
    {
        question: "I am very tired today, ___________ after my workout at the gym.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "I am learning a new language, ___________ French.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "I always wear my lucky socks to important meetings, ___________ if they are silly.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "I am a big fan of hiking, ___________ in the mountains.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "I love spending time with my friends, ___________ when we have game night.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "This biscuits are ............ made for diabetic people",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "I knitted this cardigan ............ for you.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "Both can be possible",
        choiceD: "-",
        correct: "C",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "These English classes are ............ created for Spanish speakers.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "This dog is ............ trained to guide blind people.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
    },
    {
        question: "My grandma has a sofa ............ designed for back pain.",
        choiceA: "especially",
        choiceB: "specially",
        choiceC: "-",
        choiceD: "-",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
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
    let img = (scorePerCent >= 80) ? "https://media0.giphy.com/media/67SVymF5uKeHWT5pnT/giphy.gif" :
              (scorePerCent >= 60) ? "https://media0.giphy.com/media/7zWYE1ostmPWZdygj3/giphy.gif" :
              (scorePerCent >= 40) ? "https://media.tenor.com/y5307yHPw48AAAAC/tmnt-practice.gif" :
              (scorePerCent >= 20) ? "https://media.tenor.com/tIz6Pvia7UYAAAAC/student-study.gif" :
              "https://media2.giphy.com/media/9Y1wF3wx1Dex8w9wxL/giphy.gif";
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




















