function DialogueState() {
    this.userName = null;
    this.rps = "";
}

DialogueState.prototype.setUserName = function(str) {
    this.userName = str;
}

DialogueState.prototype.setRPS = function(str) {
    if (str != 'rock' && str != 'paper' && str != 'scissors') {
        return;
    }
    this.rps = str;
}

var dialogueState = new DialogueState();