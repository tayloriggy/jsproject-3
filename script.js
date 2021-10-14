/*
Project 3: Build a number-guessing game.

Requirements:

-Create a Github repository for this project. 
-A user has three tries to guess the number, between 1-100, that the computer picked.
-Whenever they guess, let them know if their guess is too high, or too low.
-After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.
-Use an HTML form to create an input input field for the user to enter their guess
-Add a "Submit" button to the form, and use the "onsubmit" attribute to call your JavaScript function.

If the input number matches the computer picked number, use alert to say that they got it right.
Else use alert that it is wrong.
Use while loop to set numberOfGuesses to 3? Once it gets to a third guess, print out the computer's number and alert if
the picked number is right or wrong.
*/

let randomNum = Math.floor(Math.random() * 100 + 1); //generates a computer randomized number between 1-100
let numberOfGuesses = 1; //counts the number of guesses made for correct guess 


document.getElementById("button").onclick = function guessNumber() {
    let numberGuessed = document.getElementById("number").value;

    if (numberGuessed === randomNum) {
        alert ("You got it! The game has been reset.");
        resetGame();
    }

    else if (numberGuessed > randomNum && numberOfGuesses < 3) {
        numberOfGuesses++;
        alert ("Too high");
    }

    else if (numberOfGuesses < 3) {
        numberOfGuesses++;
        alert ("Too low");
    }

    else if (numberOfGuesses === 3) {
        alert (`The correct number is ${randomNum}. The game has been reset.`);
        resetGame();
    }
}

function resetGame () {
    randomNum = Math.floor(Math.random() * 100 + 1); 
    numberOfGuesses = 1;
}