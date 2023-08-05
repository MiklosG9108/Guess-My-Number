'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

if(!guess) {
    displayMessage('⛔ No number');
}
else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if (guess !== secretNumber) {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    }
    else {
        displayMessage('🏓 You lost!');
        document.querySelector('.score').textContent = 0;
    }
}
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});