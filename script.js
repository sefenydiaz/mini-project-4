// DEPENDENCIES 
// What DOM elements do you need
// variable for timer
var timeEl = document.querySelector(".time");

// DATA 
var secondsLeft = 10;
// FUNCTIONS 
function startGame(){
    var startGame = prompt("Would you like to play a game?");
}
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

//USER INTERACTIONS 
// a user clicks start
// a user types a key
// a user clicks reset scores

//INITIALIZATIONS 
setTime();