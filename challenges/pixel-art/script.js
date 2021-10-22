const mainGrid = document.getElementById('mainGrid')
const colorGrid = document.getElementById('colorGrid')
const button = document.getElementById('button')

const mainCellAll = document.querySelectorAll('.main-cell')
const colorCellAll = document.querySelectorAll('.color-cell')

let CURRENT_COLOR = 'transparent';
let FILL_COLOR = 'transparent';

function randomColor() {
    mainCellAll.forEach(cell => {
        cell.style.backgroundColor = 'transparent'
    })
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

colorGrid.addEventListener('click', e => {
    if(!e.target.matches('.color-cell')) return

    FILL_COLOR = e.target.style.backgroundColor;
})

mainGrid.addEventListener('mousedown', e => {
    CURRENT_COLOR = FILL_COLOR;
    if(!e.target.matches('.main-cell')) return

    e.target.style.backgroundColor = CURRENT_COLOR;
})

mainGrid.addEventListener('mousemove', e => {
    if(!e.target.matches('.main-cell')) return

    e.target.style.backgroundColor = CURRENT_COLOR;
})

mainGrid.addEventListener('mouseup', e => {
    CURRENT_COLOR = 'transaprent'
})

function addColors() {
    colorCellAll.forEach((cell) => {
        cell.style.backgroundColor = randomColor()
    })
}

addColors()

button.addEventListener('click', addColors)