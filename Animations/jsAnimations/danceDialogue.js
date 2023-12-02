AFRAME.registerComponent('dance-dialogue', {
    init: function() {
        this.el.addEventListener("markerFound", showDialogueDance);
        this.el.addEventListener("markerLost", hideDialogueDance);
    }
  });

function showDialogueDance() {
    let cooBubbleDance = document.querySelector("#cooBubbleDance");
    cooBubbleDance.innerHTML = "My dentist told me I don't floss enough, so I started flossing every day.";
    cooBubbleDance.style.display = "block";
}

function hideDialogueDance() {
    let dialogueDiv = document.querySelector("#cooBubbleDance");
    dialogueDiv.style.display = "none";
}