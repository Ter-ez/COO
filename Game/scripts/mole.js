// Whac a Mole Game in Javascript HTML CSS https://www.youtube.com/watch?v=ej8SatOj3V4
// Title: Whac-A-Mole
// Author: ImKennyYip
// Date: 2023
// Available: https://github.com/ImKennyYip/whac-a-mole

const miniGameContainer = document.querySelector(".miniGameContainer");

const textDivG = document.querySelector(".researchAreaText");
const researchAreaContainerG = document.querySelector("#researchAreaContainer");

const infoDivG = document.querySelector("#infoDiv");

const restartMiniGameBtn = document.querySelector("#restartMiniGameBtn");
restartMiniGameBtn.addEventListener("click", restartMole);
const cancelMiniGameBtn = document.querySelector("#cancelMiniGameBtn");
cancelMiniGameBtn.addEventListener("click", cancelMole);

let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;
let gameSet = false;

AFRAME.registerComponent('whack-a-mole', {
    init: function() {
        this.el.addEventListener("markerFound", showGameArea);
        this.el.addEventListener("markerLost", hideGameArea);
    }
});

function showGameArea() {
    textDivG.innerHTML = "I'm Lev, the mascot of Visitlab, our laboratories cooperate with each other. Is COO making you play his stupid game? Well, I've created a game too.. Do you want to play a Whac-A-Mole? Or.. Whac-A-COO? Play as long as you want, there's no goal."
    let btn = document.querySelector(".researchAreaBtn");
    if (btn) {
        btn.parentNode.removeChild(btn);
    }   
    btn = document.createElement('button');
    btn.innerHTML = "Play Whac-A-COO";
    btn.classList.add("researchAreaBtn");
    btn.addEventListener("click", showMole);
    researchAreaContainer.appendChild(btn);  
    researchAreaContainerG.style.display = "block"
}

function showMole() {
    if (!gameSet) {
        setGame();
        gameSet = true;
    }
    cancelQuiz();
    miniGameContainer.style.display = "block";    
}

function restartMole() {
    gameOver = false;
    score = 0;
    document.getElementById("scoreDiv").innerHTML = "Score: " + score.toString();
}

function cancelMole() {
    restartMole();
    hideMole();
}

function setGame() {
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("miniGameDiv").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 800);
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./assets/coo.png";

    let num = getRandomTile();
    while (currentPlantTile && currentPlantTile.id == num) {
        num = getRandomTile();
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./assets/lev.png";

    let num = getRandomTile();
    while (currentMoleTile && currentMoleTile.id == num) {
        num = getRandomTile();
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function getRandomTile() {
    return Math.floor(Math.random() * 9).toString();
}

function selectTile() {
    if (gameOver) {
        return;
    }
    
    if (this == currentMoleTile && currentMoleTile.innerHTML != "") {
        currentMoleTile.innerHTML = "";
        score += 10;
        document.getElementById("scoreDiv").innerHTML = "Score: " + score.toString();
    }
    else if (this == currentPlantTile) {
        currentPlantTile.innerHTML = "";
        document.getElementById("scoreDiv").innerHTML = "AU, that hurt! GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function hideMole() {
    miniGameContainer.style.display = "none";
}

function hideGameArea() {
    researchAreaContainerG.style.display = "none"
}