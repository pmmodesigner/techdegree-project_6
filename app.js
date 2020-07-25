const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

const phraseUl = document.querySelector('#phrase ul');

const startOverlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', () => {
    startOverlay.style.display = 'none';
});

const phrases = [
  'know the ropes',
  'curiosity killed the cat',
  'down to the wire',
  'close but no cigar',
  'under your nose'
];

function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * phrases.length)];
  const phraseCharacters = randomPhrase.split('');
  return phraseCharacters;
}

let phraseArray = getRandomPhraseAsArray(phrases);

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

// function addPhraseToDisplay(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         if (arr[i] !== ' ') {
//             li.className = 'letter';
//         } else {
//             li.className = 'space';
//         }
//         phraseUl.appendChild(li);
//     }
// }
//
// addPhraseToDisplay();

// function addPhraseToDisplay(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         if (arr[i] !== ' ') {
//             li.className = 'letter';
//         } else {
//             li.className = 'space';
//         }
//         phraseUL.appendChild(li);
//     }
// }

// }
//
//   getRandomPhraseAsArray(phrases);
// }
//
// console.log(getRandomPhraseAsArray(phrases));
