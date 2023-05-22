// DEPENDENCIES 
// What DOM elements do you need
// variable for timer
var timeEl = document.querySelector(".time");

// DATA 
var secondsLeft = 10;
// FUNCTIONS 
// function to start game + add button to start game
function startGame(){
    var startGame = prompt("Would you like to play a game?");
}
// function to start timer 
// function - if timer ends = lose 
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000); // <-- number of miliseconds between intervals
}

// function to enter letters in blanks 
// function if/else for win (if - all letters are input= win) (else - not all letters are input= lose)
// function results to show wins and losses 
// display message for when user wins or loses 

//USER INTERACTIONS 
// a user clicks start
// a user types a key
// a user clicks reset scores

//INITIALIZATIONS 
setTime();