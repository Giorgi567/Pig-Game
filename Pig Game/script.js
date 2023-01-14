'use strict';

// NOTE: this code is not mine but ive alredy created this game with my own code but i accidentally deleted the folder without even realizing it my old code and this code works exact same way only difference is code writing. and of course i can decrypt any part of the code and expalin it.

// Elements
const playerN1 = document.querySelector('.player--0');
const playerN2 = document.querySelector('.player--1');
const FirstScore = document.querySelector('#score--0');
const secondScore = document.querySelector('#score--1');
const curretnScore = document.querySelector('#current--0');
const currentSecondScore = document.querySelector('#current--1');

const diceImg = document.querySelector('.dice');
const resetButton = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const pointSave = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

activePlayer = 0;
currentScore = 0;
scores = [0, 0];
playing = true;

FirstScore.textContent = 0;
secondScore.textContent = 0;
curretnScore.textContent = 0;
currentSecondScore.textContent = 0;

diceImg.classList.add('dissapearDice');
playerN1.classList.remove('player--winner');
playerN2.classList.remove('player--winner');
playerN1.classList.add('player--active');
playerN2.classList.remove('player--active');

// Rolling dice functionality
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove('dissapearDice');
    diceImg.src = `./Dice Pics/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerN1.classList.toggle('player--active');
      playerN2.classList.toggle('player--active');
    }
  }
});

// Saving points to main score

pointSave.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add('dissapearDice');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      playerN1.classList.toggle('player--active');
      playerN2.classList.toggle('player--active');
    }
  }
});

// Reseting the game button
resetButton.addEventListener('click', function () {
  location.reload();
});
