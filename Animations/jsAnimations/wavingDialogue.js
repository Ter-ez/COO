AFRAME.registerComponent('waving-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueWaving);
        this.el.addEventListener("markerLost", hideDialogue);

        let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
        cooBubbleWaving.addEventListener("click", answerDialogueWaving);

        let userNameBtn = document.querySelector("#userNameBtn");
        userNameBtn.addEventListener("click", enterUserName);
    }
  });

function showDialogueWaving() {
    if (dialogueState.userName == null) {
        startDialogueWaving();
    }
    else {
        showUserName();
    }
}

function startDialogueWaving() {
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.innerHTML = "Hello, I'm COO, a valuable member of the HCI Lab team! What's your name? <br><br><i>Tap here</i>"
    cooBubbleWaving.style.display = "block";
}

function answerDialogueWaving() {
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    let userNameDiv = document.querySelector("#userNameDiv");
    
    
    cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.style.display = "none";
    userNameDiv.style.display = "block";
}

function enterUserName() {
    if (document.querySelector("#userNameInpt").value == null ||  document.querySelector("#userNameInpt").value.trim() == ""){
        return;
    }
    dialogueState.setUserName(document.querySelector("#userNameInpt").value);
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.removeEventListener("click", answerDialogueWaving);

    showUserName();
}

function showUserName() {
    let cooBubbleWaving = document.querySelector("#cooBubbleWaving");
    cooBubbleWaving.innerHTML = "Nice to meet you, " + dialogueState.userName + "! Feel free to look around the lab.";
    let userNameDiv = document.querySelector("#userNameDiv");
    userNameDiv.style.display = "none"
    cooBubbleWaving.style.display = "block";
}

function hideDialogue() {
    let dialogueDiv = document.querySelector("#cooBubbleWaving");
    dialogueDiv.style.display = "none"

    let userNameDiv = document.querySelector("#userNameDiv");
    userNameDiv.style.display = "none"
}