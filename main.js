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
        question : "Can I park here?",
        imgSrc : "img/patrick.gif",
        choiceA : "Sorry, I did that.",
        choiceB : "It's the same place.",
        choiceC : "Only for half an hour.",
        choiceD : "Actually, It's mine",
        correct : "C"
    },
    {
        question : "What colour will you paint the children's bedroom?",
        imgSrc : "img/patrick.gif",
        choiceA : "I hope it was right.",
        choiceB : "We can't decide.",
        choiceC : "It wasn't very difficult. ",
        choiceD : "It's easy",
        correct : "B"
    },
    {
        question : "I can't understand this email. ",
        imgSrc : "img/patrick.gif",
        choiceA : "Would you like some help?",
        choiceB : "Don't you know?",
        choiceC : "I suppose you can.",
        choiceD : "Not, for sure",
        correct : "A"
    },
    {
        question : "I'd like two tickets for tomorrow night.",
        imgSrc : "img/patrick.gif",
        choiceA : "How much did you pay?",
        choiceB : "Afternoon and evening.",
        choiceC : "I'll just check for you. ",
        choiceD : "I'm not your friend",
        correct : "C"
    },
    {
        question : "Shall we go to the gym now?",
        imgSrc : "img/patrick.gif",
        choiceA : "I'm too tired.",
        choiceB : "It's very good.",
        choiceC : "Not at all. ",
        choiceD : "I'm here",
        correct : "A"
    },
    {
        question : "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
        imgSrc : "img/patrick.gif",
        choiceA : "such",
        choiceB : "too.",
        choiceC : "so ",
        choiceD : "but",
        correct : "C"
    },
    {
        question : "The company needs to decide ...... and for all what its position is on this point.",
        imgSrc : "img/patrick.gif",
        choiceA : "here",
        choiceB : "once",
        choiceC : "first",
        choiceD : "finally",
        correct : "B"
    },
    {
        question : "Don't put your cup on the ...... of the table – someone will knock it off.",
        imgSrc : "img/patrick.gif",
        choiceA : "outside",
        choiceB : "edge",
        choiceC : "boundary",
        choiceD : "border",
        correct : "B"
    },
    {
        question : "I'm sorry - I didn't ...... to disturb you.",
        imgSrc : "img/patrick.gif",
        choiceA : "hope",
        choiceB : "think",
        choiceC : "mean",
        choiceD : "suppose",
        correct : "C"
    },
    {
        question : "The singer ended the concert ...... her most popular song.",
        imgSrc : "img/patrick.gif",
        choiceA : "by",
        choiceB : "with",
        choiceC : "in ",
        choiceD : "as",
        correct : "B"
    },
    {
        question : "Would you mind ...... these plates a wipe before putting them in the cupboard?",
        imgSrc : "img/patrick.gif",
        choiceA : "making",
        choiceB : "doing",
        choiceC : "getting",
        choiceD : "giving",
        correct : "D"
    },
    {
        question : "I was looking forward ...... at the new restaurant, but it was closed.?",
        imgSrc : "img/patrick.gif",
        choiceA : "to eat",
        choiceB : "to have eaten",
        choiceC : "to eating",
        choiceD : "eating",
        correct : "C"
    },
    
    {
        question : "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
        imgSrc : "img/patrick.gif",
        choiceA : "Whatever",
        choiceB : "No matter how",
        choiceC : "However much",
        choiceD : "Although",
        correct : "B"
    },
    {
        question : "It was only ten days ago ...... she started her new job.",
        imgSrc : "img/patrick.gif",
        choiceA : "then",
        choiceB : "since",
        choiceC : "after ",
        choiceD : "that",
        correct : "D"
    },
    {
        question : "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
        imgSrc : "img/patrick.gif",
        choiceA : "booked",
        choiceB : "ordered",
        choiceC : "commanded",
        choiceD : "asked",
        correct : "B"
    },
    {
        question : "Have you got time to discuss your work now or are you ...... to leave?",
        imgSrc : "img/patrick.gif",
        choiceA : "thinking",
        choiceB : "round",
        choiceC : "planned",
        choiceD : "about",
        correct : "D"
    },
    {
        question : "She came to live here ...... a month ago.",
        imgSrc : "img/patrick.gif",
        choiceA : "quite",
        choiceB : "beyond",
        choiceC : "already ",
        choiceD : "almost",
        correct : "D"
    },
    {
        question : "Once the plane is in the air, you can ...... your seat belts if you wish.",
        imgSrc : "img/patrick.gif",
        choiceA : "undress",
        choiceB : "unfasten",
        choiceC : "unlock ",
        choiceD : "untie",
        correct : "B"
    },
    {
        question : "I left my last job because I had no ...... to travel.",
        imgSrc : "img/patrick.gif",
        choiceA : "place",
        choiceB : "position",
        choiceC : "opportunity",
        choiceD : "possibility",
        correct : "C"
    },
    {
        question : "It wasn't a bad crash and ...... damage was done to my car.",
        imgSrc : "img/patrick.gif",
        choiceA : "little",
        choiceB : "small",
        choiceC : "light ",
        choiceD : "mere",
        correct : "A"
    },
    {
        question : "I'd rather you ...... to her why we can't go.",
        imgSrc : "img/patrick.gif",
        choiceA : "would explain",
        choiceB : "explained",
        choiceC : "to explain",
        choiceD : "will explain",
        correct : "B"
    },
    {
        question : "Before making a decision, the leader considered all ...... of the argument.",
        imgSrc : "img/patrick.gif",
        choiceA : "sides",
        choiceB : "features",
        choiceC : "perspectives",
        choiceD : "shades",
        correct : "A"
    },
    {
        question : "This new printer is recommended as being ...... reliable.",
        imgSrc : "img/patrick.gif",
        choiceA : "greatly",
        choiceB : "highly",
        choiceC : "strongly",
        choiceD : "readily",
        correct : "B"
    },
    {
        question : "When I realised I had dropped my gloves, I decided to ...... my steps.",
        imgSrc : "img/patrick.gif",
        choiceA : "retrace",
        choiceB : "regress",
        choiceC : "resume",
        choiceD : "return",
        correct : "A"
    },
    {
        question : "Anne's house is somewhere in the ...... of the railway station.",
        imgSrc : "img/patrick.gif",
        choiceA : "region",
        choiceB : "quarter",
        choiceC : "vicinity",
        choiceD : "district",
        correct : "C"
    }


];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 10s
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
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
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
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.gif" :
              (scorePerCent >= 60) ? "img/4.gif" :
              (scorePerCent >= 40) ? "img/3.gif" :
              (scorePerCent >= 20) ? "img/2.gif" :
              "img/1.png";
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





















