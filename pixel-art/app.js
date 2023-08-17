const chessboard = document.querySelector('.chessboard');
const colorpallete = document.querySelector('.pallette');
let selectedColor = '';
window.mouseDown = false;

document.onmousedown = function (){
    window.mouseDown = true;
}

document.onmouseup = function (){
    window.mouseDown = false;
}
function createChessboard(){
    for (let i = 0; i < 600; i++) {
        const colorBox  = document.createElement('div');
        colorBox.classList.add('color-box');
        chessboard.appendChild(colorBox);
    }
}

function createPallette(){
    for (let i = 0; i < 30; i++ ){
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        const colorBox = document.createElement('div');
        colorBox.classList.add('single-color');
        colorBox.style.backgroundColor="#"+randomColor;
        colorBox.dataset.color=randomColor;
        colorpallete.appendChild(colorBox);
                
    }
}

function getColors(){
    const colors = document.querySelectorAll('.single-color');
    colors.forEach(element => {
        element.addEventListener('click', (e)=>{
            selectedColor = e.target.getAttribute('data-color');
            alert('Your selected color is: '+selectedColor);
        });
    });
}

function paint(){
    const paintBoxes = document.querySelectorAll('.color-box');
    paintBoxes.forEach(element => {
        element.addEventListener('click', (e)=>{
            e.target.style.backgroundColor="#"+selectedColor;
        });

        element.addEventListener('mouseover', (e)=>{
            if(window.mouseDown){
                e.target.style.backgroundColor="#"+selectedColor;
            }
        });
    });
}



createChessboard();

createPallette();

getColors();
paint();