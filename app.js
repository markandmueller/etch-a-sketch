const cellsContainer = document.querySelector('#cellsContainer');

// create DIVs in the DOM
function singleCell() {
    const newCell = document.createElement('div');
    cellsContainer.appendChild(newCell);
    newCell.style.width = '40px';
    newCell.style.height = '40px';
    newCell.style.backgroundColor = 'lightgrey';
    newCell.style.borderColor = 'darkred';
    newCell.style.borderWidth = '1px';
    newCell.style.borderStyle = 'solid';
    //get cells to form a square
    //how to resize themselves automatically to fill available container space
}

//turn cellColumns into field input and not a prompt
const cellColumns = prompt('how wide do you want the board?');
let cellArea = cellColumns * 2;

// maybe I could use a loop to create X number of DIVs
function myLoop(cellArea) {
    for (let i = 0; i < cellArea; i++) {
        console.log(i);
        singleCell();
    }
}

myLoop(cellArea);