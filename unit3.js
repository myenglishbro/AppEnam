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
        
        question : "findings / worrying / she / the latest / described / as / deeply",
        activity:"Order the words to make sentences with object complements. ",
        choiceA : "Her name is Kandra",
        choiceB : "Their name is Sandra",
        choiceC : "Her name is Sandra",
        choiceD : "Here name is Sandra",
        correct : "C"
    },
    {
      
        question : "How old is she?",
        activity:"Choose the best answer ",
        choiceA : "She is nine years old",
        choiceB : "She is eight years old",
        choiceC : "She is eigth years old ",
        choiceD : "She is eighteen years old",
        correct : "B"
    },
    {
        
        question : "Is Sandra a student?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She is",
        choiceB : "Yes,He is",
        choiceC : "No,She isn't",
        choiceD : "No, she is a teacher",
        correct : "A"
    },
    {
        
        question : "Is Sandra from the US",
        activity:"Choose the best answer ",
        choiceA : "Yes,She is",
        choiceB : "Yes,He is",
        choiceC : "No,She isn't",
        choiceD : "No, she is a teacher",
        correct : "C"
    },
    {
        question : "Where is Sandra from",
        activity:"Choose the best answer ",
        choiceA : "The Uk ",
        choiceB : "The US",
        choiceC : "Germany",
        choiceD : "Perú",
        correct : "A"
    },
    {
        question : "What is Sandra father's name",
        activity:"Choose the best answer ",
        choiceA : "His name is Mom",
        choiceB : "Their name is Tom",
        choiceC : "His name is Tom",
        choiceD : "Him name is Tommy",
        correct : "C"
    },
    {
        question : "is He forty-five?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She is",
        choiceB : "Yes,He is",
        choiceC : "No,He isn't",
        choiceD : "No, she is a teacher",
        correct : "C"
    },
    {
        question : "What is his job?",
        activity:"Choose the best answer ",
        choiceA : "He is a doctor",
        choiceB : "He is a dentist",
        choiceC : "He is a teacher",
        choiceD : "None of them ",
        correct : "B"
    },
    {
        question : "Is he short?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She is",
        choiceB : "Yes,He is",
        choiceC : "No,He isn't",
        choiceD : "No, she is",
        correct : "C"
    },
    {
        question : "Is Tom handsome?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She is",
        choiceB : "Yes,He is",
        choiceC : "No,He isn't",
        choiceD : "No, she is",
        correct : "B"
    },
    {
        question : "What is Sandra mother's name?",
        activity:"Choose the best answer ",
        choiceA : "His name is Betina",
        choiceB : "Their name is Bet",
        choiceC : "His name is Bet",
        choiceD : "Her name is Betty",
        correct : "D"
    },
    {
        question : "How old is she ?",
        activity:"Choose the best answer ",
        choiceA : "She is fifteen-five",
        choiceB : "She is twenty-five",
        choiceC : "She is thirty-five",
        choiceD : "She is thirty-faif",
        correct : "C"
    },
    
    {
        question : "What is her job?",
        activity:"Choose the best answer ",
        choiceA : "She is a teacher",
        choiceB : "She is a nurse",
        choiceC : "She is an nurse",
        choiceD : "None of them ",
        correct : "B"
    },
    {
        question : "Is Betty beautiful?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She isn't",
        choiceB : "Yes,He is",
        choiceC : "No,He isn't",
        choiceD : "Yes, she is",
        correct : "D"
    },
    {
        question : "is She a Dentist?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She isn't",
        choiceB : "No,She isn't",
        choiceC : "No,He isn't",
        choiceD : "Yes, she is",
        correct : "B"
    },
    {
        question : "What is sandra's brother's name?",
        activity:"Choose the best answer ",
        choiceA : "His name is Betina",
        choiceB : "His name is Mark",
        choiceC : "His name is Like",
        choiceD : "His name is Mike",
        correct : "D"
    },
    {
        question : "How old is he?",
        activity:"Choose the best answer ",
        choiceA : "he is fifteen-five",
        choiceB : "he is twenty-five",
        choiceC : "he is thirty-five",
        choiceD : "He is fifteen",
        correct : "D"
    },
    {
        question : "is He a student? ",
        activity:"Choose the best answer ",
        choiceA : "Yes,She isn't",
        choiceB : "No,He isn't",
        choiceC : "Yes,He isn't",
        choiceD : "Yes, she is",
        correct : "B"
    },
    {
        question : "Is he lazy?",
        activity:"Choose the best answer ",
        choiceA : "Yes,She isn't",
        choiceB : "No,He isn't",
        choiceC : "Yes,He isn't",
        choiceD : "Yes, she is",
        correct : "B"
    },
    {
        question : "Is Mike short?",
        activity:"Choose the best answer ",
        
        choiceA : "Yes,She isn't",
        choiceB : "No,He isn't",
        choiceC : "Yes,He isn't",
        choiceD : "Yes, she is",
        correct : "B"
    },
    {
        question : "What is Sandra's sister's name?",
        activity:"Choose the best answer ",
        choiceA : "Her name is Kandra",
        choiceB : "her name is Linda",
        choiceC : "Her name is Beatiful",
        choiceD : "Here name is Kinda",
        correct : "B"
    },
    {
        question : "How old is she?",
        activity:"Choose the best answer ",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        choiceD : "4",
        correct : "A"
    },
    {
        question : "Is Linda cute?",
        activity:"Choose the best answer ",
        choiceA : "She is short",
        choiceB : "Yes,She is ",
        choiceC : "No",
        choiceD : "No, she isn't",
        correct : "B"
    },
    {
        question : "Is she tall?",
        activity:"Choose the best answer ",
        choiceA : "No, she  is short",
        choiceB : "Yes,She is ",
        choiceC : "No,she is tall",
        choiceD : "No, she aren't",
        correct : "A"
    },
    {
        question : "is she a baby?",
        activity:"Choose the best answer ",
        choiceA : "she is a boy ",
        choiceB : "She is my mother",
        choiceC : "yes",
        choiceD : "Nope",
        correct : "C"
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



















