"use strict";

// ======================================
/* 070 PROJECT #1_ Guess My Number!



// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number! 🎉";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);


*/

// ======================================
/* 071 What's the DOM and DOM Manipulation





*/

// ======================================
/* 072 Selecting and Manipulating Elements





*/

// ======================================
/* 073 Handling Click Events


document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No Number 🤔";
    }
});


*/

// ======================================
/* 074 Implementing the Game Logic


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "No Number 🤔";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number 🎉";
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high! 📈";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low 📉 ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }
    }
});



*/

// ======================================
/* 075 Manipulating CSS Styles


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number 🤔";

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number 🎉";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high! 📈";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low 📉 ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }
    }
});



*/

// ======================================
/* 076 Coding Challenge #1


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number 🤔";

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number 🎉";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high! 📈";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low 📉 ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }
    }
});

// الطريقة الاولي لحل التحدي
// انا ال عاملها
document.querySelector(".again").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    if (guess) {
        document.querySelector(".guess").value = "";
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        if (score < 20) {
            score = 20;
            document.querySelector(".score").textContent = 20;
        }
    }
});

// الطريقة الثانية لحل التحدي
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});



*/

// ======================================
/* 077 Implementing Highscores


// لعبة شغالة 


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number 🤔";

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number 🎉";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high! 📈";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low 📉 ";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});



*/

// ======================================
/* 078 Refactoring Our Code_ The DRY Principle


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// let messageEl = document.querySelector(".message");
let displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

let displayTextContent = function (select, value) {
    document.querySelector(select).textContent = value;
};

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "No Number 🤔";
        // messageEl.textContent = "No Number 🤔";
        displayMessage("No Number 🤔");

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct number 🎉";
        displayMessage("Correct number 🎉");

        // document.querySelector(".number").textContent = secretNumber;
        displayTextContent(".number", secretNumber);

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            // document.querySelector(".highscore").textContent = highScore;
            displayTextContent(".highscore", highScore);
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //     guess > secretNumber ? "Too high! 📈" : "Too low 📉 ";
            displayMessage(
                guess > secretNumber ? "Too high! 📈" : "Too low 📉 "
            );
            score--;
            // document.querySelector(".score").textContent = score;
            displayTextContent(".score", score);
        } else {
            // document.querySelector(".message").textContent =
            //     "You lost the game 😭";
            displayMessage("You lost the game 😭");
            // document.querySelector(".score").textContent = 0;
            displayTextContent(".score", 0);
        }

        //     // when guess is too high
        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "Too high! 📈";
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     } else {
        //         document.querySelector(".message").textContent =
        //             "You lost the game 😭";
        //         document.querySelector(".score").textContent = 0;
        //     }

        //     // when guess is too low
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "Too low 📉 ";
        //         score--;
        //         document.querySelector(".score").textContent = score;
        //     } else {
        //         document.querySelector(".message").textContent =
        //             "You lost the game 😭";
        //         document.querySelector(".score").textContent = 0;
        //     }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    // document.querySelector(".score").textContent = 20;
    displayTextContent(".score", 20);
    // document.querySelector(".number").textContent = "?";
    displayTextContent(".number", "?");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});



*/

/*
// كود اللعبة شغال 


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
let displayTextContent = function (select, value) {
    document.querySelector(select).textContent = value;
};
document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    // when there is no input
    if (!guess) {
        displayMessage("No Number 🤔");
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage("Correct number 🎉");
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
            displayMessage(
                guess > secretNumber ? "Too high! 📈" : "Too low 📉 "
            );
            score--;
            displayTextContent(".score", score);
        } else {
            displayMessage("You lost the game 😭");
            displayTextContent(".score", 0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    displayTextContent(".score", 20);
    displayTextContent(".number", "?");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});





*/


// ======================================
/* 079 PROJECT #2_ Modal Window





*/

// ======================================
/* 080 Working With Classes





*/

// ======================================
/* 081 Handling an _Esc_ Keypress Event





*/

// ======================================
/* 082 PROJECT #3_ Pig Game





*/

// ======================================
/* 083 Rolling the Dice





*/

// ======================================
/* 084 Switching the Active Player





*/

// ======================================
/* 085 Holding Current Score





*/

// ======================================
/* 086 Resetting the Game





*/
