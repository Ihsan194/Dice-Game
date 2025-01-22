const options = [1, 2, 3, 4, 5, 6, "Exit"];
let isGameRunning = true;

function addPoints(option) {
    const currentScoreElement = document.getElementById('currentScore');
    const totalScoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const finalScoreElement = document.getElementById('finalScore');
    const gameUI = document.getElementById('gameUI');
    const replayButtonContainer = document.getElementById('replayButtonContainer');

    const currentScore = parseInt(currentScoreElement.innerText);

    if (option === "Exit") {
        if (parseInt(highScoreElement.innerText) < currentScore) {
            highScoreElement.innerText = currentScore;
        }
        totalScoreElement.innerText = 0;
        finalScoreElement.innerText = currentScore;

        currentScoreElement.innerText = 0;

        gameUI.style.display = "none";
        replayButtonContainer.style.display = "block";

        isGameRunning = false; 
    } else {
        currentScoreElement.innerText = currentScore + option;
    }
}

function getOption() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function showPoint() {
    if (!isGameRunning) return;

    const option = getOption();
    const diceElement = document.getElementById('dice');
    diceElement.innerText = option;

    addPoints(option);
}

function replay() {
    isGameRunning = true;

    document.getElementById('currentScore').innerText = 0;
    document.getElementById('dice').innerText = "-";
    document.getElementById('score').innerText = 0; 
    document.getElementById('gameUI').style.display = "block";
    document.getElementById('replayButtonContainer').style.display = "none";
}
