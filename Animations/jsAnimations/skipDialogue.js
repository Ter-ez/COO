AFRAME.registerComponent('skip-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueSkip);
        this.el.addEventListener("markerLost", hideDialogueSkip);

        let cooBubbleSkip = document.querySelector("#cooBubbleSkip");
        cooBubbleSkip.addEventListener("click", answerDialogueSkip);

        let answerBtnSkip1 = document.querySelector("#answerBtnSkip1");
        answerBtnSkip1.addEventListener("click", () => {
            dialogueState.setRPS('rock');
            chooseRPS();
        });

        let answerBtnSkip2 = document.querySelector("#answerBtnSkip2");
        answerBtnSkip2.addEventListener("click", () => {
            dialogueState.setRPS('paper');
            chooseRPS();
        });

        let answerBtnSkip3 = document.querySelector("#answerBtnSkip3");
        answerBtnSkip3.addEventListener("click", () => {
            dialogueState.setRPS('scissors');
            chooseRPS();
        });
    }
  });

function showDialogueSkip() {
    let cooBubbleSkip = document.querySelector("#cooBubbleSkip");
    cooBubbleSkip.innerHTML = "Let's play rock, paper, scissors. <br><br><i>Tap here</i>"
    cooBubbleSkip.style.display = "block";
}

function answerDialogueSkip() {
    let cooBubbleSkip = document.querySelector("#cooBubbleSkip");
    cooBubbleSkip.style.display = "none";

    let dialogueBtnsDivSkip = document.querySelector("#dialogueBtnsDivSkip");
    dialogueBtnsDivSkip.style.display = "block"; 
}

function chooseRPS() {
    let randint = Math.floor(Math.random() * 3);
    
    let cooRPS = "";
    switch (randint) {
        case 0:
            cooRPS = 'rock';
            break;
        case 1:
            cooRPS = 'paper';
            break;
        case 2:
            cooRPS = 'scissors';
            break;
    }

    chooseWinner(cooRPS);
}

function chooseWinner(cooRPS) {
    let cooBubbleSkip = document.querySelector("#cooBubbleSkip");

    if (cooRPS == dialogueState.rps) {
        cooBubbleSkip.innerHTML = cooRPS.toUpperCase() + ". It's a tie!";
    }
    else if (dialogueState.rps == 'rock') {
        if (cooRPS == 'paper') {
            cooBubbleSkip.innerHTML = "PAPER. I win!";
        }
        else {
            cooBubbleSkip.innerHTML = "SCISSORS. You win!";
        }
    }
    else if (dialogueState.rps == 'paper') {
        if (cooRPS == 'rock') {
            cooBubbleSkip.innerHTML = "ROCK. You win!";
        }
        else {
            cooBubbleSkip.innerHTML = "SCISSORS. I win!";
        }
    }
    else {
        if (cooRPS == 'rock') {
            cooBubbleSkip.innerHTML = "ROCK. I win!";
        }
        else {
            cooBubbleSkip.innerHTML = "PAPER. You win!";
        }
    }

    let dialogueBtnsDivSkip = document.querySelector("#dialogueBtnsDivSkip");
    dialogueBtnsDivSkip.style.display = "none"; 

    cooBubbleSkip.style.display = "block";
}


function hideDialogueSkip() {
    let dialogueDiv = document.querySelector("#cooBubbleSkip");
    dialogueDiv.style.display = "none"
    
    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivSkip");
    dialogueBtnsDiv.style.display = "none"
}