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
        question: "We will have to _____________ on that until we receive the confirmation.",
        choiceA: "make use of",
        choiceB: "hold off on",
        choiceC: "make light of",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"

        },
        
        {
        question: "I'm not ______________ the situation.I think it's important",
        choiceA: "making use of",
        choiceB: "holding off on",
        choiceC: "making light of",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "You have to _______________ on the second floor.",
        choiceA: "get in",
        choiceB: "get off",
        choiceC: "get up",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "What time will you _______________? I need you to be here at 7pm ",
        choiceA: "come back",
        choiceB: "get up",
        choiceC: "get off",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "I can arrange for a wake-up call to make sure you ______________ on time.",
        choiceA: "get up",
        choiceB: "come back",
        choiceC: "get out",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "You have to _______________ ( = leave your room) before 11:00 AM.",
        choiceA: "check up",
        choiceB: "check in",
        choiceC: "check out",
        correct: "C",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "I'm sorry, I can't _______________ ( = read, decipher) what this says.",
        choiceA: "make out",
        choiceB: "check out",
        choiceC: "plan out",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "You should probably _______________ ( = give yourself) 2 hours to get to the airport.",
        choiceA: "allow for",
        choiceB: "attend to",
        choiceC: "send for",
        correct: "A",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "Of course, I'll _______________ this right away. ( = I'll take care of this right away.)",
        choiceA: "allow for",
        choiceB: "attend to",
        choiceC: "send for",
        correct: "B",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
        
        {
        question: "I'll _______________ a bellhop. = I'll call a bellhop.",
        choiceA: "attend to",
        choiceB: "allow for",
        choiceC: "send for",
        correct: "C",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "We should _____________ and not make any decisions until we have all the information we need.",
            choiceA: "make use of",
            choiceB: "hold off on",
            choiceC: "make light of",
            choiceD: "-",
            correct: "B",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "The company is _______________ a new marketing campaign to attract younger customers.",
            choiceA: "making use of",
            choiceB: "holding off on",
            choiceC: "making light of",
            choiceD: "-",
            correct: "A",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "Don't forget to _______________ the train at the next station.",
            choiceA: "get in",
            choiceB: "get off",
            choiceC: "get up",
            choiceD: "-",
            correct: "B",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "What time do you want to _______________ for dinner tonight?",
            choiceA: "come back",
            choiceB: "get up",
            choiceC: "get off",
            choiceD: "-",
            correct: "A",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "You need to _______________ your car from the parking lot before 6:00 PM.",
            choiceA: "get up",
            choiceB: "come back",
            choiceC: "get out",
            choiceD: "-",
            correct: "C",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "Please remember to _______________ at the front desk before you leave the hotel.",
            choiceA: "check up",
            choiceB: "check in",
            choiceC: "check out",
            choiceD: "-",
            correct: "C",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "Can you help me _______________ what this word means?",
            choiceA: "make out",
            choiceB: "check out",
            choiceC: "plan out",
            choiceD: "-",
            correct: "A",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "You should _______________ enough time to fill out the application before the deadline.",
            choiceA: "allow for",
            choiceB: "attend to",
            choiceC: "send for",
            choiceD: "-",
            correct: "A",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "I'll _______________ the paperwork for the new project as soon as possible.",
            choiceA: "allow for",
            choiceB: "attend to",
            choiceC: "send for",
            choiceD: "-",
            correct: "B",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sz9ff_5KKa7J37-gvAaeI_MoOQa-Q7VZGzl4DlWwIE1gr3D1SWWnkoxwBQ6sgeqz5b8&usqp=CAU"
        },
            {
            question: "Can you please _______________ the manager for me? I need to speak with them urgently.",
            choiceA: "attend to",
            choiceB: "allow for",
            choiceC: "send for",
            choiceD: "-",
            correct: "C",
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




















