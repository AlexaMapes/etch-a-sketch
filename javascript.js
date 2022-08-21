const gridContainer = document.querySelector('.container');

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
            for (let i = 0; i < gridSize; i++) {
                let gridSquare = document.createElement('div');
                gridSquare.classList.add('square');
                gridRow.appendChild(gridSquare);
            }
        gridContainer.appendChild(gridRow);
    }
}

createGrid(gridSize);

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('colored');
    })
})