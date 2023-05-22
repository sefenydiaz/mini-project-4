// DEPENDENCIES 
// What DOM elements do you need
//var generateGame = prompt("Would you like to play a game?"); --> NEED TO ADD AN IF STATEMENT IF PLAYER SAYS YES
var startBtn = document.querySelector("#start");
// variable for timer
var timeEl = document.querySelector(".time");
var gameContainerEl = document.querySelector("#game-container");
var lossesEl = document.querySelector("#losses");
var winsEl = document.querySelector("#wins");


// DATA 
var secondsLeft = 10;
var losses;
var wins;
var word;

//var losses = 0;
//var wins = 0;
// FUNCTIONS 

//function generateGame()  --> NEED AN IF ELSE STATEMENT TO GENERATE GAME
function showBlanks(word) {
    var blanks = ""
    for (var i=0; i<word.length; i++){
        blanks+="_"
    }
    wordDisplayEl.innerHTML = "<h2>"+blanks.split("").join("")+"</h2>"
}
// function to start game + add button to start game
function startGame(){
    console.log("Game is starting");
    //create a time interval
    // start the timer
    setTime();
    // get a word to guess
    word = getAWord();
    // show some blanks
    showBlanks(word);
    
    
}

function getAWord() {
    var words = [
        "kuromi",
        "hello kitty",
        "my melody",
        "keroppi",
        "cinnamaroll"
    ]
    var randomIndex = Math.floor(Math.random() * words.length)
    var randomWord = words[randomIndex];

    return randomWord;
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

function youLose() {
    losses++
    lossesEl.textContent = losses;
    wordDisplayEl.textContent = "You lose"
}

function loadScores() {
    // retrieve wins and losses
    losses = localStorage.getItem("losses") || 0;
    wins = localStorage.getItem("wins") || 0;
    // display wins and losses
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
}
// function to enter letters in blanks 
// function if/else for win (if - all letters are input= win) (else - not all letters are input= lose)
// function results to show wins and losses 
// display message for when user wins or loses 

//USER INTERACTIONS 
// a user clicks start
startBtn.addEventListener("click", startGame);
// a user types a key
    // check if the key is in the word
    // replace any blanks where the letter matches the key pressed
    // check to see if they have guessed the word
        // yes ? you win
        // no? keep playing
// a user clicks reset scores

//INITIALIZATIONS 
setTime();
loadScores();