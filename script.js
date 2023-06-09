'use strict';

//Select the elment to display the dice roll. 
const imageElement = document.querySelector('.dice');

//Select the different buttons on the game window,. 
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold')


//select the score related elements

const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');

//player names 

const player1Name = document.getElementById('name--0');
const player2Name = document.getElementById('name--1');

//Current scores

const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');

//Selecting the current active player 

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//Score Variables 

let totalScore1 = 0;
let totalScore2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;
let diceRoll = 0;

let imgSrc = ''

//common functions

const switchActivePlayer = function () {
    if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    } else {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
}

//Event Handlers 

const rollDiceFunction = function () {
    diceRoll = Math.trunc(Math.random() * 6 + 1);

    console.log(typeof diceRoll, diceRoll)
    switch (diceRoll) {
        case 1:
            imgSrc = "dice-1.png";
            break;
        case 2:
            imgSrc = "dice-2.png";
            break;
        case 3:
            imgSrc = "dice-3.png";
            break;
        case 4:
            imgSrc = "dice-4.png";
            break;
        case 5:
            imgSrc = "dice-5.png";
            break;
        case 6:
            imgSrc = "dice-6.png";
    }

    imageElement.setAttribute('src', imgSrc);

    if (player1.classList.contains('player--active')) {
        currentScore1 += diceRoll;
        currentScorePlayer1.textContent = currentScore1
    } else {
        currentScore2 += diceRoll;
        currentScorePlayer2.textContent = currentScore2
    }

    if (diceRoll === 1) {
        switchActivePlayer();
    }
}

const holdFunction = function () {
    if (player1.classList.contains('player--active')) {
        totalScore1 += currentScore1;
        player1Score.textContent = totalScore1;
        if (totalScore1 >= 100) {
            player1Name.textContent = 'Player 1 Wins !'
        }

        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    } else {
        totalScore2 += currentScore2;
        player2Score.textContent = totalScore2;
        if (totalScore2 >= 100) {
            player2Name.textContent = 'Player 2 Wins !'
        }
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
    }
}

const newGameFunction = function () {
    totalScore1 = 0;
    totalScore2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    player1Score.textContent = totalScore1;
    player2Score.textContent = totalScore2;

    player1Name.textContent = 'Player 1';
    player2Name.textContent = 'Player 2';

    currentScorePlayer1.textContent = currentScore1;
    currentScorePlayer2.textContent = currentScore2;

    player1.classList.add('player--active');
    player2.classList.remove('player--active');


}

//Adding Event listener 

rollDice.addEventListener('click', rollDiceFunction);

hold.addEventListener('click', holdFunction);

newGame.addEventListener('click', newGameFunction);




