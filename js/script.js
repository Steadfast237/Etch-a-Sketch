const gridSize = 16;
const grid = document.querySelector('.container');

function generateGrid() {
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const square = document.createElement('div');

      square.style.width = `${535 / gridSize}px`;
      square.style.outline = '1px solid red';
      square.style.height = 'auto';

      grid.appendChild(square);
    }
  }
}
