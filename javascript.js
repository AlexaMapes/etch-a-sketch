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

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('colored');
    })
})

function deleteGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const button = document.querySelector('.sizeSet');
button.addEventListener('click', () => {
    let newSize = 0;
    while ((newSize <=0) || (newSize > 100)) {
        newSize = prompt("Please enter new grid size (max 100)");
    }
    deleteGrid();
    createGrid(newSize);
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('colored');
        })
    })
})


