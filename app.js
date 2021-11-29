// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    const winningElem 
    // then add the face class to that element so that the face shows up
    // winningElem.src = './assets/'; WHERE????
    // then if the user guess is correct, increment the correct guesses
    if (winningElem === '') {
        winsEl++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    displayWinLossTotal();
}

function displayWinLossTotal() {
    winsEl.textContent = wins;
    lossEl.textContent = total - wins;
    totalEl.textContent = total;
}

function resetStyles() {
    // should remove the face class from all containers
}

shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    handleGuess('shed');
    // then use that correct spot to 'handle the guess' using the handleGuess function
});

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    handleGuess('tree');
    // then use that correct spot to 'handle the guess' using the handleGuess function
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    handleGuess('boulder');
    // then use that correct spot to 'handle the guess' using the handleGuess function
});
