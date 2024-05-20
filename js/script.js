let gridSize = 16;
let squares = undefined;
const grid = document.querySelector('.container');
const buttonSetSize = document.querySelector('.size');

function generateGrid() {
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const square = document.createElement('div');

      square.style.width = `${535 / gridSize}px`;
      square.style.outline = '1px solid red';
      square.style.height = 'auto';
      square.classList.add('square');

      grid.appendChild(square);
    }
  }
}

function startDrawing(e) {
  e.target.style.backgroundColor = 'black';

  squares.forEach((sq) => {
    sq.addEventListener('mousemove', drawing);
  });
}

function drawing(e) {
  e.target.style.backgroundColor = 'black';
}

function stopDrawing() {
  squares.forEach((sq) => {
    sq.removeEventListener('mousemove', drawing);
  });
}

function setSize() {
  let newGridSize = Number(prompt('What size do you want?'));

  if (isNaN(newGridSize)) {
    alert('enter a number between 1 and 100');
    return;
  }

  gridSize = newGridSize;
  grid.textContent = '';
  init();
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

init();
