//const keysRequired = 4;

function UserState() {
    this.numOfKeys = 0;
    this.hciQuizCompleted = false;
    this.xrQuizCompleted = false;
    this.gamesQuizCompleted = false;
    this.gameAreaCompleted = false;
    this.visQuizCompleted = false;
    this.gameStarted = false;
    this.cooDialogueID = 1;
}

UserState.prototype.addKey = function() {
    this.numOfKeys++;
    const userStateDiv = document.querySelector("#userStateDiv");
    userStateDiv.innerHTML = "Keys: " + userState.numOfKeys + "/4";
    // if (this.numOfKeys == keysRequired) {
    //     this.changeDialogue(7);
    //     document.querySelector("#userStateDiv").style.display = "none";

    //     let goBack = document.querySelector("#infoDiv");
    //     goBack.innerHTML = "Go back to COO";
    //     goBack.display.style = "block";
    //     setTimeout(() => {
    //         goBack.style.display = "none";
    //     }, 1500); 
    // }
}

UserState.prototype.startGame = function() {
    this.gameStarted = true;
}

UserState.prototype.changeDialogue = function(id) {
    this.cooDialogueID = id;
}

let userState = new UserState();