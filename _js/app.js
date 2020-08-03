// initial variables -------------------------------------

const overlay = document.getElementById('overlay');

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const resetButton = document.querySelector('.btn__reset');
  resetButton.style.cursor = "pointer";

let missed = 0;
const tries = document.querySelectorAll('.tries');

const ul = document.querySelector('ul');

const phrases = [
  'know the ropes',
  'curiosity killed the cat',
  'down to the wire',
  'close but no cigar',
  'under your nose',
  'back to square one',
  'no brainer',
  'quick on the draw',
  'fight fire with fire',
  'right out of the gate'
];

const phraseUl = document.querySelector('#phrase ul');

//--------------------------------------------------------



// return a random phrase from an array ------------------

function getRandomPhraseAsArray(arr) {
  const randomPhraseSelection = arr[Math.floor(Math.random() * phrases.length)];
  const phraseLetters = randomPhraseSelection.split('');
  return phraseLetters;
}

const phraseLetterArray = getRandomPhraseAsArray(phrases);

//--------------------------------------------------------



// add the letter of a string to the display -------------

function addPhraseToDisplay(arr) {
  for ( let i = 0; i < arr.length; i++ ) {
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

addPhraseToDisplay(phraseLetterArray);

//--------------------------------------------------------



// check if a letter is in the phrase --------------------

function checkLetter(clickedButton) {
  let match = null;
  document.querySelectorAll('.letter').forEach( (letter) => {
      if (clickedButton === letter.textContent.toLowerCase() ) {
          letter.classList.add('show');
          match = clickedButton;
      }
  });
  return match;
}

//--------------------------------------------------------



// check if the game has been won or lost ----------------

function checkWin() {
  const displayedLetters = document.getElementsByClassName('letter');
  const clickedLetters = document.getElementsByClassName('show');
  if (displayedLetters.length === clickedLetters.length) {
    overlay.className = 'win';
    overlay.innerHTML = `
      <h1>YOU WON!</h1>
      <h3>Play again?</h3>
      <a class="btn__reset">Play again</a>`;
    overlay.style.display = 'flex';
  }
  if (missed > 4) {
    overlay.className = 'lose';
    overlay.innerHTML = `
      <h1>You lost!</h1>
      <h3>Play again?</h3>
      <a class="btn__reset">Try again</a>`;
    overlay.style.display = 'flex';
  }
}

//--------------------------------------------------------



// listen for the onscreen keyboard to be clicked --------

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.className = 'chosen';
        button.disabled = true;
        const correct = checkLetter(button.textContent);
        if (correct === null) {
            tries[missed].firstChild.src = '_images/lostHeart.png';
            missed++;
        }
    }
    checkWin()
});

//--------------------------------------------------------



// restart the game and restore original properties ------

function restartGame() {
    let button = qwerty.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        button[i].removeAttribute('class');
        button[i].removeAttribute('disabled');
    }
    missed = 0;
    for (let i = 0; i < 5; i++) {
        tries[i].firstChild.src = '_images/liveHeart.png';
    }
    overlay.style.display = 'none';
    ul.innerHTML = '';
    const newPhraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(newPhraseArray);
}

//--------------------------------------------------------



// start the game and remove the overlay -----------------

overlay.addEventListener('click', (e) => {
    if (event.target.tagName === 'A') {
        if (overlay.className === 'start') {
            overlay.style.display = 'none';
        } else if (overlay.className === 'win' || overlay.className === 'lose') {
            restartGame();
        }
    }
});

//--------------------------------------------------------
