
const randRGB = () => {
    let r = Math.floor(Math.random() * (255));
    let g = Math.floor(Math.random() * (255));
    let b = Math.floor(Math.random() * (255));
    return [r,g,b]
}

const makeBoard = (size) => {
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            grid.appendChild(box);
            // the specs indicate mouse over, but i like click better
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = `rgb(${randRGB()})`;
            })
        }
    }
}

const clearBoard = () => {
    // delete old grid (and boxes) 
    const grid = document.querySelector('.grid');
    grid.remove();

    // make new grid
    const main = document.querySelector('.main');

    const newGrid = document.createElement('div');
    newGrid.classList.add('grid');
    main.appendChild(newGrid);
}

// when program starts:
makeBoard(4)
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    let gridInput = parseInt(prompt('Input the # of squares per side (MAX 100): '))
    
    // check if good
    if (gridInput > 100 || gridInput < 0) {
        return; // just nothing
    }
    
    // if good, call clearBoard then makeBoard
    clearBoard();
    makeBoard(gridInput);

})


