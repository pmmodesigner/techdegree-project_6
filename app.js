//initial variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const tries = document.querySelectorAll('.tries');
const phrases = [
  'know the ropes',
  'curiosity killed the cat',
  'down to the wire',
  'close but no cigar',
  'under your nose'
];
const phraseUl = document.querySelector('#phrase ul');


// start button and overlay

const startOverlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', () => {
    startOverlay.style.display = 'none';
});


// return as random phrase from array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * phrases.length)];
  const phraseCharacters = randomPhrase.split('');
  return phraseCharacters;
}

const phraseArray = getRandomPhraseAsArray(phrases);


// display random phrase

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i]
    const li = document.createElement('li');
    const ul = document.querySelector('#phrase ul');
    li.textContent = letter;
    ul.appendChild(li);
    if(letter !== ' ') {
      li.className = 'letter'
    }
    else {
      li.className = 'space'
    }
  }
}

addPhraseToDisplay(phraseArray);


// check for letters in the phrase
function checkLetter(clickedButton) {
    let match = null;
    document.querySelectorAll('.letter').forEach((letter) => {
        if (clickedButton === letter.textContent.toLowerCase()) {
            letter.className += 'show';
            match = clickedButton;
        }
    });
    return match;
}

// compare user button clicks to phrase
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.className = 'chosen';
        button.disabled = true;
        const correct = checkLetter(button.textContent);
        if (correct === null) {
            tries[missed].firstChild.src = 'images/lostHeart.png';
            missed++;
        }
    }
});

// function checkLetter(clickGuess)
//   for (let i = 0; i < clickGuess; i++) {
//     const letterToCheck = document.getElementsByClassName('letter');
//   }
