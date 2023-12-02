AFRAME.registerComponent('jump-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueJump);
        this.el.addEventListener("markerLost", hideDialogueJump);

        let cooBubbleJump = document.querySelector("#cooBubbleJump");
        cooBubbleJump.addEventListener("click", answerDialogueJump);

        let answerBtnJump1 = document.querySelector("#answerBtnJump1");
        answerBtnJump1.addEventListener("click", () => {
            answerNumber("1");
        });

        let answerBtnJump2 = document.querySelector("#answerBtnJump2");
        answerBtnJump2.addEventListener("click", () => {
            answerNumber("2");
        });

        let answerBtnJump3 = document.querySelector("#answerBtnJump3");
        answerBtnJump3.addEventListener("click", () => {
            answerNumber("3");
        });

        let answerBtnJump4 = document.querySelector("#answerBtnJump4");
        answerBtnJump4.addEventListener("click", () => {
            answerNumber("4");
        });

        let answerBtnJump5 = document.querySelector("#answerBtnJump5");
        answerBtnJump5.addEventListener("click", () => {
            answerNumber("5");
        });
    }
  });

function showDialogueJump() {
    let cooBubbleJump = document.querySelector("#cooBubbleJump");
    cooBubbleJump.innerHTML = "Do you wanna see a magic trick? Think of a number from 1 to 5, I can guess it. <br><br><i>Tap here</i>"
    cooBubbleJump.style.display = "block";
}

function answerDialogueJump() {
    let cooBubbleJump = document.querySelector("#cooBubbleJump");
    let dialogueBtnsDivJump = document.querySelector("#dialogueBtnsDivJump");
    
    cooBubbleJump.style.display = "none";
    dialogueBtnsDivJump.style.display = "block";
}

function answerNumber(num) {
    let cooBubbleJump = document.querySelector("#cooBubbleJump");
    cooBubbleJump.innerHTML = "Hmm.. You're thinking of the number " + num + "!";

    let dialogueBtnsDivJump = document.querySelector("#dialogueBtnsDivJump");      
    dialogueBtnsDivJump.style.display = "none";
    cooBubbleJump.style.display = "block";
}

function hideDialogueJump() {
    let dialogueDiv = document.querySelector("#cooBubbleJump");
    dialogueDiv.style.display = "none"
    
    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivJump");
    dialogueBtnsDiv.style.display = "none"
}