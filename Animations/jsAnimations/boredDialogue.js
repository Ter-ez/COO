AFRAME.registerComponent('bored-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueBored);
        this.el.addEventListener("markerLost", hideDialogueBored);
    }
  });

function showDialogueBored() {
    let cooBubbleBored = document.querySelector("#cooBubbleBored");
    cooBubbleBored.addEventListener("click", answerDialogueBored1);
    cooBubbleBored.innerHTML = "Knock, knock.  <br><br><i>Tap here</i>"
    cooBubbleBored.style.display = "block";
}

function answerDialogueBored1() {
    let cooBubbleBored = document.querySelector("#cooBubbleBored");
    cooBubbleBored.style.display = "none";

    let dialogueBtnsDivBored = document.querySelector("#dialogueBtnsDivBored");
    dialogueBtnsDivBored.style.display = "block"; 

    let answerBtnBored = document.querySelector("#answerBtnBored");
    answerBtnBored.textContent = "Who's there?"
    answerBtnBored.addEventListener("click", () => {
        cooBubbleBored.innerHTML = "COO."
        dialogueBtnsDivBored.style.display = "none"; 
        cooBubbleBored.style.display = "block";
        cooBubbleBored.removeEventListener("click", answerDialogueBored1);
        cooBubbleBored.addEventListener("click", answerDialogueBored2);
    });
}

function answerDialogueBored2() {
    let cooBubbleBored = document.querySelector("#cooBubbleBored");
    cooBubbleBored.style.display = "none";

    let answerBtnBored = document.querySelector("#answerBtnBored");
    answerBtnBored.textContent = "COO who?"

    let dialogueBtnsDivBored = document.querySelector("#dialogueBtnsDivBored");
    dialogueBtnsDivBored.style.display = "block"; 

    answerBtnBored.addEventListener("click", () => {
        cooBubbleBored.innerHTML = "COOuld you, please, fix the bug already, and come play with me?! I'm bored."
        dialogueBtnsDivBored.style.display = "none"; 
        cooBubbleBored.removeEventListener("click", answerDialogueBored2);
        cooBubbleBored.style.display = "block";
    });
}


function hideDialogueBored() {
    let dialogueDiv = document.querySelector("#cooBubbleBored");
    dialogueDiv.style.display = "none"
    
    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivBored");
    dialogueBtnsDiv.style.display = "none"
}