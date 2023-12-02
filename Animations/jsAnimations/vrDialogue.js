AFRAME.registerComponent('vr-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueVR);
        this.el.addEventListener("markerLost", hideDialogueVR);

        let cooBubbleVR = document.querySelector("#cooBubbleVR");
        cooBubbleVR.addEventListener("click", answerDialogueVR);

        let answerBtnVR1 = document.querySelector("#answerBtnVR1");
        answerBtnVR1.addEventListener("click", answerDialogueVR1);

        let answerBtnVR2 = document.querySelector("#answerBtnVR2");
        answerBtnVR2.addEventListener("click", answerDialogueVR2);
    }
  });

function showDialogueVR() {
    let cooBubbleVR = document.querySelector("#cooBubbleVR");
    cooBubbleVR.innerHTML = "Wow, look at this! Have you ever tried VR? <br><br><i>Tap here</i>"
    cooBubbleVR.style.display = "block";
}

function answerDialogueVR() {
    let cooBubbleVR = document.querySelector("#cooBubbleVR");
    cooBubbleVR.style.display = "none";

    let dialogueBtnsDivVR = document.querySelector("#dialogueBtnsDivVR");
    dialogueBtnsDivVR.style.display = "block";

}

function answerDialogueVR1() {
    let cooBubbleVR = document.querySelector("#cooBubbleVR");
    cooBubbleVR.innerHTML = "You should definitely try it, we have some VR headsets in the lab!"

    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivVR");
    dialogueBtnsDiv.style.display = "none"
    cooBubbleVR.style.display = "block";
}

function answerDialogueVR2() {
    let cooBubbleVR = document.querySelector("#cooBubbleVR");
    cooBubbleVR.innerHTML = "It's so cool, right? We have some VR headsets in the lab, if you ever want to try it again."

    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivVR");
    dialogueBtnsDiv.style.display = "none"
    cooBubbleVR.style.display = "block";
}


function hideDialogueVR() {
    let dialogueDiv = document.querySelector("#cooBubbleVR");
    dialogueDiv.style.display = "none"
    
    let dialogueBtnsDiv = document.querySelector("#dialogueBtnsDivVR");
    dialogueBtnsDiv.style.display = "none"
}