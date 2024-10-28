"use strict";
// start code
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
let displayTextContent = function(select, value) {
    document.querySelector(select).textContent = value;
};
document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);
    // when there is no input
    if (!guess) displayMessage("No Number \uD83E\uDD14");
    else if (guess === secretNumber) {
        displayMessage("Correct number \uD83C\uDF89");
        displayTextContent(".number", secretNumber);
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            displayTextContent(".highscore", highScore);
        }
    // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high! \uD83D\uDCC8" : "Too low \uD83D\uDCC9 ");
            score--;
            displayTextContent(".score", score);
        } else {
            displayMessage("You lost the game \uD83D\uDE2D");
            displayTextContent(".score", 0);
        }
    }
});
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    displayTextContent(".score", 20);
    displayTextContent(".number", "?");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

//# sourceMappingURL=index.09c24910.js.map
