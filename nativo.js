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
        question : "Elon Musk es asquerosamente rico.",
        imgSrc : "img/patrick.gif",
        choiceA : "Elon Musk is quite rich.",
        choiceB : "Elon Musk is higly rich.",
        choiceC : "Elon Musk is filthy rich.",
        choiceD : "Elon Musk is dirty rich.",
        correct : "C"
    },
    {
        question : "Estamos emocionados con nuestra nueva casa.",
        imgSrc : "img/patrick.gif",
        choiceA : "We’re thrilled bits with our new home",
        choiceB : "We’re thrilled to bits with our new home",
        choiceC : "We’re thrille to bits with our new home ",
        choiceD : "We’re thrill to bits with our new home",
        correct : "B"
    },
    {
        question : "¿Corriste toda la maratón? ¡Creo que me estás tomando el pelo! ",
        imgSrc : "img/patrick.gif",
        choiceA : "You ran the entire marathon? I think you’re having me on!",
        choiceB : "You ran the entire marathon? I think you’re taking me on!",
        choiceC : "You ran the entire marathon? I think you’re having my hair on!",
        choiceD : "You ran the entire marathon? I think you’re having on!",
        correct : "A"
    },
    {
        question : "¿Ya se conocían? ¡Qué coincidencia! El mundo es un pañuelo.",
        imgSrc : "img/patrick.gif",
        choiceA : "Did you already know each other? What a coincidence! It’s a small tie.",
        choiceB : "Did you already know each other? What a coincidence! It’s a small towel.",
        choiceC : "Did you already know each other? What a coincidence! It’s a small world. ",
        choiceD : "Did you already know each other? What a coincidence! It’s a little world.",
        correct : "C"
    },
    {
        question : "¿Por qué has arrojado ese jarrón contra la pared? ¿Te has vuelto loco?",
        imgSrc : "img/patrick.gif",
        choiceA : "Why did you smash that vase against the wall? Have you gone completely off your trolley?",
        choiceB : "Why did you smash that vase against the wall? Have you gone completely off crazy?",
        choiceC : "Why did you smash that vase against the wall? Have you gone completely crazy? ",
        choiceD : "Why did you smash that vase against the wall? Have you gone completely off boots?",
        correct : "A"
    },
    {
        question : "Te noto un poco de bajón. ¿Qué te pasa?",
        imgSrc : "img/patrick.gif",
        choiceA : "You look a bit short in the sadness. What’s wrong with you?",
        choiceB : "You look a bit low in the sad. What’s wrong with you?",
        choiceC : "You look a bit down in the dumps. What’s wrong with you?",
        choiceD : "You look a bit down in the cry. What’s wrong with you?",
        correct : "C"
    },
    {
        question : "No vuelvo a quedar contigo nunca más. Es la tercera vez que me dejas plantada.",
        imgSrc : "img/patrick.gif",
        choiceA : "I’m not meeting you ever again. This is the 3rd time you’ve stand me up a tree.",
        choiceB : "I’m not meeting you ever again. This is the 3rd time you’ve stood me up.",
        choiceC : "I’m not meeting you ever again. This is the 3rd time you’ve stooden me up.",
        choiceD : "I’m not meeting you ever again. This is the 3rd time you’ve stood me .",
        correct : "B"
    },
    {
        question : "¿Cómo puede gustarte esa canción? ¡Es muy cursi!",
        imgSrc : "img/patrick.gif",
        choiceA : "How can you like that song? It’s so cringy!",
        choiceB : "How can you like that song? It’s so cheesy!",
        choiceC : "How can you like that song? It’s so love!",
        choiceD : "How can you like that song? It’s so caring!",
        correct : "B"
    },
    {
        question : "Ese lavabo no parece estar recto. ¿Cuánto te ha cobrado el manitas por esta chapuza? ",
        imgSrc : "img/patrick.gif",
        choiceA : "That sink doesn’t look straight to me. How much did the handyman charge you for this bad job?",
        choiceB : "That sink doesn’t look straight to me. How much did the handyman charge you for this crazy job?",
        choiceC : "That sink doesn’t look straight to me. How much did the handyman charge you for this bodge job?",
        choiceD : "That sink doesn’t look straight to me. How much did the handyman charge you for this handy job?",
        correct : "C"
    },
    {
        question : "Me da repelús cada vez que alguien se cruje los nudillos. ",
        imgSrc : "img/patrick.gif",
        choiceA : "I shame whenever somebody cracks their nuckles.",
        choiceB : "I cringe whenever somebody cracks their nuckles.",
        choiceC : "I pitty whenever somebody cracks their nuckles. ",
        choiceD : "I cringe whenever somebody cracks their nackles.",
        correct : "B"
    },
    {
        question : "  No le guardo rencor a mis padres por haberme enviado al reformatorio.",
        imgSrc : "img/patrick.gif",
        choiceA : "I don’t hold any grudges for my parents for sending me to boarding school.",
        choiceB : "I don’t deserve any grudges against my parents for sending me to boarding school.",
        choiceC : "I don’t hate any grudges for my parents for sending me to boarding school.",
        choiceD : "I don’t hold any grudges against my parents for sending me to boarding school.",
        correct : "D"
    },
    {
        question : "Casi me desmayo al ver la cuenta. ",
        imgSrc : "img/patrick.gif",
        choiceA : "I almost passed when I saw the bill",
        choiceB : "I almost passe on when I saw the bill",
        choiceC : "I almost passed out when I saw the bill",
        choiceD : "I almost passed of when I saw the bill",
        correct : "C"
    },
    
    {
        question : "Abuela, ¡te acabas de saltar un semáforo en rojo!",
        imgSrc : "img/patrick.gif",
        choiceA : "Grandma, you’ve just passed a red light!",
        choiceB : "Grandma, you’ve just run a red light!",
        choiceC : "Grandma, you’ve just ommit a red light!",
        choiceD : "Grandma, you’ve just ignore a red traffic!",
        correct : "B"
    },
    {
        question : "Mi madre se puso como una fiera cuando encontró una botella de ginebra en mi mochila.",
        imgSrc : "img/patrick.gif",
        choiceA : "My mother went goffy when she found a bottle of gin in my backpack.",
        choiceB : "My mother went goggy when she found a bottle of gin in my backpack.",
        choiceC : "My mother went craze when she found a bottle of gin in my backpack. ",
        choiceD : "My mother went berserk when she found a bottle of gin in my backpack.",
        correct : "D"
    },
    {
        question : "Aún no he conseguido contactar con la inmobiliaria, pero seguiré intentándolo",
        imgSrc : "img/patrick.gif",
        choiceA : "I still didn’t contact to get hold of the estate agent, but I’ll keep trying .",
        choiceB : "I still didn’t manage to get hold of the estate agent, but I’ll keep trying .",
        choiceC : "I still didn’t get to get hold of the estate agent, but I’ll keep trying .",
        choiceD : "I still didn’t arrange to get hold of the estate agent, but I’ll keep trying .",
        correct : "B"
    },
    {
        question : "No creo que William pudiera en algún momento darle la espalda a Harry, sea lo que sea de lo que se le acuse.",
        imgSrc : "img/patrick.gif",
        choiceA : "I don't think William would ever turn his back in Harry, whatever he was accused of.",
        choiceB : "I don't think William would ever turn his back  Harry, whatever he was accused of.",
        choiceC : "I don't think William would ever turn his back at Harry, whatever he was accused of.",
        choiceD : "I don't think William would ever turn his back on Harry, whatever he was accused of.",
        correct : "D"
    },
    {
        question : "La encimera de tu cocina está siempre impecable",
        imgSrc : "img/patrick.gif",
        choiceA : "Your kitchen counters are always nicest.",
        choiceB : "Your kitchen counters are always fuldy.",
        choiceC : "Your kitchen counters are always cleaness. ",
        choiceD : "Your kitchen counters are always spotless.",
        correct : "D"
    },
    {
        question : "Ni se te ocurra volver a decir que soy un vago cuando sabes que me he dejado la piel en este proyecto.",
        imgSrc : "img/patrick.gif",
        choiceA : "Don’t you dere say I’m lazy when you know I’ve been working my fingers to the bone with this project!",
        choiceB : "Don’t you dare say I’m lazy when you know I’ve been working my fingers to the bone with this project!",
        choiceC : "Don’t you try to say I’m lazy when you know I’ve been working my fingers to the bone with this project! ",
        choiceD : "Don’t you care say I’m lazy when you know I’ve been working my fingers to the bone with this project!",
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
        question : "Disculpa que te haya interrumpido, por favor continúa.",
        imgSrc : "img/patrick.gif",
        choiceA : "Sorry to cut you off, please carry on",
        choiceB : "Sorry to cut you off, please carry me on",
        choiceC : "Sorry to cut him off, please carry on ",
        choiceD : "Sorry to cut me off, please carry on",
        correct : "A"
    },
    {
        question : "Fue un poco incómodo decirle a mi jefe que he encontrado otro trabajo.",
        imgSrc : "img/patrick.gif",
        choiceA : "It was a bit awkwar to tell my boss that I’ve found another job.",
        choiceB : "It was a bit awkward to tell my boss that I’ve found another job.",
        choiceC : "It was a bit awkcward to tell my boss that I’ve found another job.",
        choiceD : "It was a bit awkward to tell my boss that I’ve found another work.",
        correct : "B"
    },
    {
        question : "Prefiero hacer algo que me haga sentir realizado.",
        imgSrc : "img/patrick.gif",
        choiceA : "I would rather do what makes me feel fulfilled.",
        choiceB : "I would rather do what makes me feel completed.",
        choiceC : "I would rather do what makes me feel done.",
        choiceD : "I would rather do what makes me feel ready.",
        correct : "A"
    },
    {
        question : "La pandemia resultó ser un gran contratiempo para muchos negocios.",
        imgSrc : "img/patrick.gif",
        choiceA : "The pandemic was a major sitback for many businesses",
        choiceB : "The pandemic was a major setback for many businesses",
        choiceC : "The pandemic was a great setback about many businesses",
        choiceD : "The pandemic was a major setback in many businesses",
        correct : "B"
    },
    {
        question : "Es obligatorio quitarse los zapatos.",
        imgSrc : "img/patrick.gif",
        choiceA : "It’s compulsory to take your shoes off.",
        choiceB : "It’s random to take your shoes off.",
        choiceC : "It’s compulsive to take your shoes off.",
        choiceD : "It’s a need to take your shoes off.",
        correct : "A"
    },
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    },
    
    {
        question : "Sé que ser presidenta de la empresa en un trabajo duro, pero no intentes abarcar más de la cuenta.",
        imgSrc : "img/patrick.gif",
        choiceA : "I know being the SEO is hard work, but try not to bite off more than you can chew.",
        choiceB : "I know being the CEO is hard work, but try not to bate off more than you can chew.",
        choiceC : "I know being the SEO is hard work, but try not to bite off more than you can chew.",
        choiceD : "I know being the CEO is hard work, but try not to bite off more than you can chew.",
        correct : "D"
    },
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
        correct : "C"
    }
    ,
    
    {
        question : "Estoy completamente decepcionado con el nuevo becario. No sabe hacer la O con un canuto",
        imgSrc : "img/patrick.gif",
        choiceA : "I am great disappointed with the new intern. He’s completely useless.",
        choiceB : "I am utterly disappointed for the new intern. He’s completely useless.",
        choiceC : "I am utterly disappointed with the new intern. He’s completely useless.",
        choiceD : "I am utterly disappointed with the new becary. He’s completely useless.",
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




















