let cpuChoice;
let userChoice;
let userCount = 0;
let cpuCount = 0;

let result = document.querySelector('#result');
let pcount = document.querySelector('#pcount');
let ccount = document.querySelector('#ccount');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


rockBtn.onclick = function() {
    userChoice = 2;
    game();
}
paperBtn.onclick = function() {
    userChoice = 3;
    game();
}
scissorsBtn.onclick = function() {
    userChoice = 1;
    game();
}

result.textContent = 'Time to pick';

function cChoice() {
    cpuChoice = Math.ceil(Math.random() * 3);
}




function game() {
    for (let i = 0; i < 1; i++) {
        cChoice();
        whoWon();
        
        if (userCount == 5) {
            i = 99;
            result.textContent = 'YOU WON!';
            ccount.textContent = 0;
            pcount.textContent = 0;
            cpuCount = 0;
            userCount = 0;
        } else if (cpuCount == 5) {
            i = 99;
            result.textContent = 'The computer won!';
            ccount.textContent = 0;
            pcount.textContent = 0;
            cpuCount = 0;
            userCount = 0;
        }
    }
}



function whoWon() {
    
    
    if (userChoice == 1 && cpuChoice == 2) {
        result.textContent = 'You Lose! Rock beats Scissors';
        cpuCount++;
        ccount.textContent = cpuCount;
    } else if (userChoice == 1 && cpuChoice == 1) {
        result.textContent = 'It\'s a tie! You both chose Scissors';
    } else if (userChoice == 1 && cpuChoice == 3) {
        result.textContent = 'You Win! Scissors beats Paper';
        userCount++;
        pcount.textContent = userCount;
    } else if (userChoice == 2 && cpuChoice == 1) {
        result.textContent = 'You Win! Rock beats Scissors';
        userCount++;
        pcount.textContent = userCount;
    } else if (userChoice == 2 && cpuChoice == 2) {
        result.textContent = 'It\'s a tie! You both chose Rock';
    } else if (userChoice == 2 && cpuChoice == 3) {
        result.textContent = 'You Lose! Paper beats Rock';
        cpuCount++;
        ccount.textContent = cpuCount;
    } else if (userChoice == 3 && cpuChoice == 1) {
        result.textContent = 'You Lose! Scissors beats Paper';
        cpuCount++;
        ccount.textContent = cpuCount;
    } else if (userChoice == 3 && cpuChoice == 2) {
        result.textContent = 'You Win! Paper beats Rock';
        userCount++;
        pcount.textContent = userCount;
    } else if (userChoice == 3 && cpuChoice == 3){
        result.textContent = 'It\'s a tie! You both chose Paper';
    } else {
        return (userChoice + cpuChoice)
    }
}