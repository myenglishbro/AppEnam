// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

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
        question :'Boy: I want to buy a fish. </br>Woman: Do you want a tropical fish or a cold water one? </br> Boy: I want a really colorful fish. Can you show me some of the tropical fish you have? </br>Question: What is the boy looking for? ......?',
        choiceA : "A red and yellow fish",
        choiceB : "A cold water goldfish",
        choiceC : "A tropical fish",
        choiceD : "None of them",
        correct : "C"
    },
    {
        question : "Ray: I need a vacation. </br>Toni: How about Mexico? I heard it's beautiful at this time of year.</br> Ray: Maybe, but I was hoping for somewhere a little cooler.</br> Question: Where does Ray want to go? ......",
       
        choiceA : "Mexico, because it's beautiful at this time of year",
        choiceB : "A place that has a cooler climate than Mexico",
        choiceC : "The Bahamas ",
        choiceD : "Perú",
        correct : "B"
    },
    {
        question : " Mary: Did you have fun at the barbeque last night?</br> Linda: Yes, I thought the games were a great touch.</br> Mary: Me too. I especially liked the three-legged race. </br>Question: What did Linda like about the barbeque? ......",
      
        choiceA : "The games",
        choiceB : "The food",
        choiceC : "the people",
        choiceD : "The three-legged race",
        correct : "A"
    },
    {
        question : "Michael: My wife and I bought some great house plants yesterday. </br>Maria: Really? Do you have a lot of sunlight in your house?</br> Michael: No, so we bought some plants that have low light requirements.</br> Question: What kind of plants did Michael buy? ......",
       
        choiceA : "Plants that need a lot of sunlight",
        choiceB : "Small house plants",
        choiceC : "Plants that don't need a lot of sunlight",
        choiceD : "she is a teacher",
        correct : "C"
    },
    {
        question : "Frank: I'm going to take my wife to Table Top Mountain this weekend. </br> Mark: That sounds interesting. Is it far?</br>  Frank: Not too far. It's about a three-hour drive from here. </br> Question: How are Frank and his wife traveling to Table Top Mountain? ......",
       
        choiceA : "By car ",
        choiceB : " By plane",
        choiceC : "By ship",
        choiceD : "By foot",
        correct : "A"
    },
    {
        question : "Anne: Do you know the new girl in the mailroom?</br>  Richard: No, but I think she's Cathy's friend.</br>  Anne: We should ask Cathy to introduce us at lunch.</br>  Question: What department is the new girl in? ......",
    
        choiceA : "Cathy's department",
        choiceB : "The reception area",
        choiceC : "The mailroom",
        choiceD : "The school",
        correct : "C"
    },
    {
        question : "Ron: Do you think the business conference went well?</br>  Sarah: Yes, but next year I think the planners should include more about global technology. </br> Ron: I agree. We should know more about that.</br>  Question: What area does Sarah want to include in next year's conference? ......",
      
        choiceA : "The environment",
        choiceB : "Development",
        choiceC : "Technology around the world",
        choiceD : "Technology and modern business",
        correct : "C"
    },
    {
        question : "Harry: What time does your flight leave? </br>Deb: Our departure is scheduled for 7:45 in the morning. Could you take me to the airport?</br> Harry: Sure. We'll have to leave the city at about 5 o'clock then. Deb: Sounds good.</br> Question: What time does Deb's flight leave? ...... ",
     
        choiceA : "5 am",
        choiceB : "7:45 am",
        choiceC : "7:45 pm",
        choiceD : "7:55 pm ",
        correct : "B"
    },
    {
        question : " Axel: Do you know anything about Thai cuisine?</br> Caroline: Yes, I love Thai food. Why?</br> Axel: My in-laws are taking my wife and me out to a Thai restaurant tonight. They really like that kind of food.</br> Question: Who is going for dinner at the Thai restaurant? ......",
       
        choiceA : "Axel and her friend",
        choiceB : "Axel and his wife",
        choiceC : "Axel, his wife and her parents",
        choiceD : "Axel, his wife and his parents",
        correct : "C"
    },
    {
        question : "Jane: How many people were at Brad's wedding? </br>Bruce: Oh, there must have been at least 150 people there. The reception hall was really big, and it was nearly full of guests. We had a great time. </br>Jane: That's great.</br> Question: How many people were at Brad's wedding? ......",
   
        choiceA : "Fewer than 150 people",
        choiceB : "A minimum of 150 people",
        choiceC : "Exactly 150 people",
        choiceD : "Exactly 130 people",
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



















