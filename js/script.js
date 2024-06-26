let gridSize = 16;
let squares = undefined;
let currentColor = 'black';
let isRandom = false;

const grid = document.querySelector('.container');
const buttonSetSize = document.querySelector('.size');
const buttonClear = document.querySelector('.clear');
const buttonErase = document.querySelector('.erase');
const buttonBlack = document.querySelector('.black');
const buttonRandom = document.querySelector('.random');
const buttonInput = document.querySelector('#input-color');

function generateGrid() {
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const square = document.createElement('div');

      square.style.width = `${535 / gridSize}px`;
      square.style.height = 'auto';
      square.classList.add('square');

      grid.appendChild(square);
    }
  }
}

function startDrawing(e) {
  e.target.style.backgroundColor = isRandom ? randomColor() : currentColor;

  squares.forEach((sq) => {
    sq.addEventListener('mouseenter', drawing);
  });
}

function drawing(e) {
  e.target.style.backgroundColor = isRandom ? randomColor() : currentColor;
}

function stopDrawing() {
  squares.forEach((sq) => {
    sq.removeEventListener('mouseenter', drawing);
  });
}

function setSize() {
  let newGridSize = Number(prompt('What size do you want?'));

  if (isNaN(newGridSize)) {
    alert('enter a number between 1 and 100');
    return;
  }

  if (newGridSize > 100) {
    gridSize = 100;
    grid.textContent = '';
    init();
    return;
  }

  gridSize = newGridSize;
  grid.textContent = '';
  init();
}

function clearGrid() {
  squares.forEach((sq) => {
    sq.style.backgroundColor = 'white';
  });
}

function clearSquare() {
  currentColor = 'white';
  isRandom = false;
}

function setColorBlack() {
  currentColor = 'black';
  isRandom = false;
}

function setColorInput(e) {
  currentColor = e.target.value;
  isRandom = false;
}

function randomColor() {
  const firstColor = Math.floor(Math.random() * 256);
  const secondColor = Math.floor(Math.random() * 256);
  const thirdColor = Math.floor(Math.random() * 256);

  return `rgb(${firstColor},${secondColor},${thirdColor})`;
}

function init() {
  generateGrid();

  squares = document.querySelectorAll('.square');

  squares.forEach((sq) => {
    sq.addEventListener('mousedown', startDrawing);

    sq.addEventListener('mouseup', stopDrawing);
  });
}

buttonSetSize.addEventListener('click', setSize);
buttonClear.addEventListener('click', clearGrid);
buttonErase.addEventListener('click', clearSquare);
buttonBlack.addEventListener('click', setColorBlack);
buttonRandom.addEventListener('click', function () {
  isRandom = true;
});
buttonInput.addEventListener('input', setColorInput);

init();
