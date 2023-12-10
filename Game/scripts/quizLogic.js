const textDiv = document.querySelector(".researchAreaText");
const researchAreaContainer = document.querySelector("#researchAreaContainer");
const quizContainer = document.querySelector(".quizContainer");

const questionDiv = document.querySelector("#questionDiv");
const quizButtons = document.querySelector("#quizButtonsDiv");
const quizInput = document.querySelector("#quizInputDiv");

const infoDiv = document.querySelector("#infoDiv");

let hciMarker = document.querySelector("#hciMarker");
let xrMarker = document.querySelector("#xrMarker");
let visMarker = document.querySelector("#visMarker");

const cancelQuizBtn = document.querySelector("#cancelQuizBtn");
cancelQuizBtn.addEventListener("click", cancelQuiz);

let currentQuestionIndex;
let currentArea;

AFRAME.registerComponent('quiz-marker', {
    init: function() {
        this.el.addEventListener("markerFound", decideWhichMarkerFound);
        this.el.addEventListener("markerLost", hideResearchAreaDiv);
    }
});


function decideWhichMarkerFound() {
    cancelMole();
    hciMarker = document.querySelector("#hciMarker");
    xrMarker = document.querySelector("#xrMarker");
    visMarker = document.querySelector("#visMarker");
    if (hciMarker.object3D.visible) {
        showHCI()
    }
    else if (visMarker.object3D.visible){
        showVis();
    }
    else if (xrMarker.object3D.visible) {
        showXR()
    }
    else {
        showGames()
    }
}


// show info about the research area
function showHCI() {
    textDiv.innerHTML = "HCI is a field of study that aims to make to the interaction between humans and machines as seamless as possible by combining the knowledge from multiple disciplines (computer science, psychology, cognitive science,..). The term emerged at the end of 20th century, when personal computers became accessible to regular users.";
    let btn = document.querySelector(".researchAreaBtn");
    if (btn) {
        btn.parentNode.removeChild(btn);
    }
    if (userState.gameStarted && !userState.hciQuizCompleted) {
        btn = document.createElement('button');
        btn.innerHTML = "Start quiz";
        btn.classList.add("researchAreaBtn");
        btn.addEventListener("click", () => {
            currentArea = hciQuestions;
            startQuiz();
        });
        researchAreaContainer.appendChild(btn);  
    }
      
    researchAreaContainer.style.display = "block";
}

function showXR() {
    textDiv.innerHTML = "Extended reality (XR) is a term referring to technologies that merge virtual and physical worlds together. This includes virtual reality (VR), augmented reality (AR) and mixed reality (MR). It is one of the main research areas of our laboratory.";
    let btn = document.querySelector(".researchAreaBtn");
    if (btn) {
        btn.parentNode.removeChild(btn);
    }
    if (userState.gameStarted && !userState.xrQuizCompleted) {
        btn = document.createElement('button');
        btn.innerHTML = "Start quiz";
        btn.classList.add("researchAreaBtn");
        btn.addEventListener("click", () => {
            currentArea = xrQuestions;
            startQuiz();
        });
        researchAreaContainer.appendChild(btn);  
    }
      
    researchAreaContainer.style.display = "block";
}

function showVis() {
    textDiv.innerHTML = "Our activities involve data visualization for many different areas - we have worked with geo-data, medical data, data from games, and many more. Even in this field, the emphasis is put on users' needs.";
    let btn = document.querySelector(".researchAreaBtn");
    if (btn) {
        btn.parentNode.removeChild(btn);
    }
    if (userState.gameStarted && !userState.visQuizCompleted) {
        btn = document.createElement('button');
        btn.innerHTML = "Start quiz";
        btn.classList.add("researchAreaBtn");
        btn.addEventListener("click", () => {
            currentArea = visQuestions;
            startQuiz();
        });
        researchAreaContainer.appendChild(btn);  
    }
      
    researchAreaContainer.style.display = "block";
}

function showGames() {
    textDiv.innerHTML = "Games play a huge part of our laboratory's activities. Besides research, we teach multiple courses on game design, game development, 3D modelling, or games user research, and there's a master's degree program on game development too. Some members of our laboratory focus also on esports and how HCI concepts can influence the future of it.";
    let btn = document.querySelector(".researchAreaBtn");
    if (btn) {
        btn.parentNode.removeChild(btn);
    }
    if (userState.gameStarted && !userState.gamesQuizCompleted) {
        btn = document.createElement('button');
        btn.innerHTML = "Start quiz";
        btn.classList.add("researchAreaBtn");
        btn.addEventListener("click", () => {
            currentArea = gamesQuestions;
            startQuiz();
        });
        researchAreaContainer.appendChild(btn);  
    }
      
    researchAreaContainer.style.display = "block";
}

// Quiz logic  https://www.youtube.com/watch?v=riDzcEQbX6k
// Title: Javascript Quiz App
// Author: WebDevSimplified
// Date: 2019
// Available: https://github.com/WebDevSimplified/JavaScript-Quiz-App

function startQuiz() {
    currentQuestionIndex = 0;
    setNextQuestion();
    quizContainer.style.display = "block";
    infoDiv.innerHTML = "You can move away from the marker, the quiz will stay on the screen.";
    infoDiv.style.display = "block";
    setTimeout(() => {
        infoDiv.style.display = "none";
    }, 3000); 
}

function setNextQuestion() {
    resetQuizState();
    showQuestion(currentArea[currentQuestionIndex])
}

function showQuestion(question) {
    questionDiv.innerHTML = question.question;
    question.options.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("quizBtn");
        if (answer.correct) {
           btn.dataset.correct = answer.correct; 
        }
        btn.addEventListener("click", selectQuizAnswer);
        quizButtons.appendChild(btn);
    });   
}

function resetQuizState() {
    quizInput.style.display = "none";
    while (quizButtons.firstChild) {
        quizButtons.removeChild(quizButtons.firstChild);
    }
}

function selectQuizAnswer(e) {
    const selectedBtn = e.target;
    if (selectedBtn.dataset.correct) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("wrong");
        setTimeout(cancelQuiz, 1500); 
        showInfoDiv("Incorrect, try again.", 1500, "wrong");
    }

    if (currentArea.length > currentQuestionIndex + 1){
        currentQuestionIndex++; 
        setTimeout(setNextQuestion, 1500);
    }
    else if (selectedBtn.classList.contains("correct")){
        userState.addKey();
        if (currentArea == hciQuestions) {
            userState.hciQuizCompleted = true;
        }
        else if (currentArea == visQuestions) {
            userState.visQuizCompleted = true;
        }
        else if (currentArea == gamesQuestions) {
            userState.gamesQuizCompleted = true;
        }
        else {
            userState.xrQuizCompleted = true;
        }

        let btnShown = document.querySelector(".researchAreaBtn");
        if (btnShown) {
            btnShown.style.display = "none";
        }
        setTimeout(cancelQuiz, 1500); 
        if (userState.numOfKeys == keysRequired) {
            userState.cooDialogueID = 7;
            document.querySelector("#userStateDiv").style.display = "none";
            showInfoDiv("Go back to COO.", 3500);  
        } 
        else {
            showInfoDiv("A key has been added to you inventory.", 1500, "correct");    
        }
    }
}

function showInfoDiv(string, timeLimit, wantedClass = null) {
    if (wantedClass != null) {
        infoDiv.classList.add(wantedClass);
    }
    infoDiv.innerHTML = string;
    infoDiv.style.display = "block";
    setTimeout(() => {
        infoDiv.style.display = "none";
    }, timeLimit);   
    if (wantedClass != null) {
        setTimeout(() => {
            infoDiv.classList.remove(wantedClass);
        }, timeLimit); 
    }
}

function cancelQuiz() {
    currentQuestionIndex = 0;
    document.querySelector(".quizContainer").style.display = "none";
}

function hideResearchAreaDiv() {
    researchAreaContainer.style.display = "none";
}


const hciQuestions = [
    {
        question: "What is the main goal of the field of human-computer interaction? (Try to deduce it.)",
        options: [
            {
                text: "To make the communication between machines and humans as easy as possible",
                correct: true
            },
            {
                text: "To make the communication between machines and humans as cost-effective as possible",
                correct: false
            },
            {
                text: "To eliminate all human errors in the communication between machines and humans",
                correct: false
            }       
        ]
    },
    {
        question: "When was the HCI Laboratory established? (You can find it at another marker.)",
        options: [
            {
                text: "1998",
                correct: false
            },
            {
                text: "2002",
                correct: true
            },
            {
                text: "2004",
                correct: false
            },
            {
                text: "2020",
                correct: false
            }         
        ]
    },
    {
        question: "What room number are we in (the room of HCI Lab)?",
        options: [
            {
                text: "A418",
                correct: false
            },
            {
                text: "A421",
                correct: true
            },
            {
                text: "A321",
                correct: false
            }      
        ]
    },
    {
        question: "UX and UI design are a big part of HCI. What do these terms stand for? (Try to deduce it.)",
        options: [
            {
                text: "User Experience, User Involvement",
                correct: false
            },
            {
                text: "User Experiment, User Interface",
                correct: false
            },
            {
                text: "User Experience, User Interface",
                correct: true
            }      
        ]
    },
]

const xrQuestions = [
    {
        question: "Which technology transfers its user to a fully virtual environment? (Try to deduce it.)",
        options: [
            {
                text: "AR",
                correct: false
            },
            {
                text: "MR",
                correct: false
            },
            {
                text: "VR",
                correct: true
            }        
        ]
    },
    {
        question: "Which technology enhances user's physical surrounding with virtual elements and makes it possible for virtual and physical elements to interact? (Try to deduce it.)",
        options: [
            {
                text: "AR",
                correct: false
            },
            {
                text: "MR",
                correct: true
            },
            {
                text: "VR",
                correct: false
            }        
        ]
    },
    {
        question: "Which technology enhances user's surrounding with virtual elements without making it possible for virtual and physical elements to interact? (Try to deduce it.)",
        options: [
            {
                text: "AR",
                correct: true
            },
            {
                text: "MR",
                correct: false
            },
            {
                text: "VR",
                correct: false
            }        
        ]
    },
    {
        question: "What did the AR Goggles project focus on? (You can find at another marker.)",
        options: [
            {
                text: "AR glasses for geodesists",
                correct: false
            },
            {
                text: "AR glasses for surgeons",
                correct: false
            },
            {
                text: "AR glasses for pilots",
                correct: true
            }        
        ]
    },
    {
        question: "What is the name of the project that uses AR to visualize underwater cultural heritage? (You can find it at another marker.)",
        options: [
            {
                text: "iMareHeritage",
                correct: false
            },
            {
                text: "iMareSites",
                correct: false
            },
            {
                text: "iMareCulture",
                correct: true
            }        
        ]
    },
]

const visQuestions = [
    {
        question: "What data is visualized in the CAVER project? (You can find it at anther marker.)",
        options: [
            {
                text: "Tunnels and channels in protein structures",
                correct: true
            },
            {
                text: "Underground tunnels and shafts in Czech cities",
                correct: false
            },
            {
                text: "Bloodflow patterns in human heart",
                correct: false
            }        
        ]
    },
    {
        question: "What is the name of the laboratory we collaborate with? (You can find it at another marker.)",
        options: [
            {
                text: "Visitlab",
                correct: true
            },
            {
                text: "EsitLab",
                correct: false
            },
            {
                text: "Vislab",
                correct: false
            }        
        ]
    },
]

const gamesQuestions = [
    {
        question: "Our laboratory focuses on gamification. What does it mean? (Try to deduce it.)",
        options: [
            {
                text: "The creation of game consoles from old objects",
                correct: false
            },
            {
                text: "A concept that uses game elements in non-game environments to enagage users",
                correct: true
            },
            {
                text: "A concept that aims to replace physical activities with digital games",
                correct: false
            }        
        ]
    },
    {
        question: "What does esports stand for? (Try to deduce it.)",
        options: [
            {
                text: "Electronic sports",
                correct: true
            },
            {
                text: "Extreme sports",
                correct: false
            },
            {
                text: "Entertainment sports",
                correct: false
            }        
        ]
    },
    {
        question: "What courses related to games do our members teach? (You can find it at another marker.)",
        options: [
            {
                text: "Game development, game design, 3D modelling, games user research",
                correct: true
            },
            {
                text: "Gamification, game developoment, game design",
                correct: false
            },
            {
                text: "Esports, gamification, game design, game development",
                correct: false
            }        
        ]
    }
]