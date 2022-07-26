var computer = document.getElementById('Computer-Choice');
var user = document.getElementById('Your-Choice');
var resultDisplay = document.getElementById('Result');
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');

var userChoice;
var computerChoice;
var result;

    rockBtn.onclick = function (){
        userChoice = rockBtn.id
        user.innerHTML = userChoice;
        getResult();

    }
    paperBtn.onclick = function (){
        userChoice = paperBtn.id
        user.innerHTML = userChoice;
        getResult();

    }
    scissorsBtn.onclick = function (){
        userChoice = scissorsBtn.id
        user.innerHTML = userChoice;
        getResult();

    }
    computerChoice();


function computerChoice(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
    if (randomNumber ===1){
        computerChoice = 'rock'
    }
    if (randomNumber ===2){
        computerChoice = 'scissors'
    }
    if (randomNumber ===3){
        computerChoice = 'paper'
    }
    computer.innerHTML = computerChoice;
}
function getResult(){
    if (computerChoice === userChoice){
        result = ' Equal !'
    }
    if (computerChoice === 'rock'&& userChoice === "paper"){
        result = ' you win !'
    }
    if (computerChoice === 'rock'&& userChoice === "scissors"){
        result = ' you lost !'
    }
    if (computerChoice === 'paper'&& userChoice === "scissors"){
        result = ' you win !'
    }
    if (computerChoice === 'paper'&& userChoice === "scissors"){
        result = ' you win !'
    }
    if (computerChoice === 'paper'&& userChoice === "rock"){
        result = ' you lost !'
    }
    if (computerChoice === 'scissors'&& userChoice === "paper"){
        result = ' you lost !'
    }
    if (computerChoice === 'scissors'&& userChoice === "rock"){
        result = ' you win !'
    }
    if (computerChoice === 'scissors'&& userChoice === "paper"){
        result = ' you lost !'
    }
    resultDisplay.innerHTML = result;
}