const grid = document.getElementById("grid");
const clearBtn = document.querySelector('.clearBtn')

function makeGrid (rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        grid.appendChild(cell).className = "grid-item";
    };

};

function reset () {
 while(grid.firstChild) {
     grid.removeChild(grid.lastChild);
 }
 makeGrid (16, 16);
}

let userRows = prompt("Please enter # of rows! Min- 16, Max - 100");
let userCols = prompt("Please enter # of columns! Min- 16, Max - 100");

makeGrid (userRows, userCols);

grid.addEventListener('mouseover', function(e) {
        e.target.classList.add('active');
});

clearBtn.addEventListener('click', reset);
