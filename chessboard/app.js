const chessboard = document.querySelector('.chessboard');
let color = false;
let selectedNumber=[];

async function createChessboard(){
    for (let i = 1; i <= 64; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.number=i;

        if(!color){
            cell.style.backgroundColor='rgb(211, 211, 211)';
            cell.dataset.color='white';
        }else{
            cell.style.backgroundColor='black';
            cell.dataset.color='black';
        }

        i%2 ? cell.dataset.even = false : cell.dataset.even = true; 
        i%8 ? color = !color : color = color;

        chessboard.appendChild(cell);
    }
}


function colorDiagonally(e){
    selectedNumber=[];
    clearCells();
    const cells = chessboard.querySelectorAll('.cell');
    let number = Number(e.target.getAttribute('data-number'));
    const cellColor = e.target.getAttribute('data-color');

    selectedNumber.push(number);
    
    let tmp = number;

    findGreater(tmp, 7);
    findGreater(tmp, 9);
    findLess(tmp, 7);
    findLess(tmp, 9);

    const selectedCells = [...cells].filter(elem => elem.getAttribute('data-color') === cellColor && selectedNumber.includes( Number(elem.getAttribute('data-number')) ));

    selectedCells.forEach(elem => {
        elem.style.backgroundColor='red';
    });
}

function findGreater(tmp, number){
    do{
        tmp = tmp + number;
        selectedNumber.push(tmp);
    } while (tmp < 64) 
}

function findLess(tmp, number){
    do{
        tmp = tmp - number;
        selectedNumber.push(tmp);
    } while (tmp > 0) 
}

function clearCells(){
    const redCells = document.querySelectorAll("[style*='background-color: red;']")
    redCells.forEach(elem =>{
        if(elem.getAttribute('data-color') === 'white'){
            elem.style.backgroundColor='rgb(211, 211, 211)';
        }else{
            elem.style.backgroundColor='black';
        }
    })
}

function getCells (){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(element => {
        element.addEventListener('click', colorDiagonally);
    });
}

createChessboard();
getCells();
