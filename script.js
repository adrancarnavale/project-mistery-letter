const letterText = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const btnCreateLetter = document.querySelector('#criar-carta');
const letterCounter = document.querySelector('#carta-contador');

const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function generatesLetter() {
  const words = document.querySelectorAll('span');
  for (let i = 0; i < words.length; i += 1) {
    words[i].remove();
  }
  if (letterText.value === null || letterText.value.match(/^ *$/) !== null) {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    return 1;
  }
  const text = letterText.value.split(' ');
  for (let i = 0; i < text.length; i += 1) {
    const word = document.createElement('span');
    word.innerText = text[i];
    generatedLetter.appendChild(word);
  }
}

function countsWords() {
  const text = letterText.value.split(' ');
  const numberOfWords = text.length;
  letterCounter.innerText = `${numberOfWords}`;
}

btnCreateLetter.addEventListener('click', generatesLetter);
btnCreateLetter.addEventListener('click', countsWords);

function randomClasses() {
  const results = [];
  for (let i = 0; i < classes.length; i += 1) {
    const number = Math.floor(Math.random() * classes[i].length);
    const result = classes[i][number];
    results.push(result);
  }
  console.log(results);
  return results;
}

function inputsClasses() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i += 1) {
    const classValue = randomClasses();
    spans[i].className = `${classValue[0]} ${classValue[1]} ${classValue[2]} ${classValue[3]}`;
  }
}

btnCreateLetter.addEventListener('click', inputsClasses);
