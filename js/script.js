let gridSize = 10;
const grid = document.querySelector('.container');

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

generateGrid();

const squares = document.querySelectorAll('.square');

squares.forEach((sq) => {
  sq.addEventListener('mousedown', startDrawing);

  sq.addEventListener('mouseup', stopDrawing);
});
