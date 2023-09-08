const gameFake = document.querySelector('.game-fake');
const gameReal = document.querySelector('.game-real');
const attemps = document.querySelector('h2');
const restart = document.querySelector('.restart');
const icons = [
    '&#127774;',
    '&#127770;',
    '&#127921;',
    '&#129381;',
    '&#128126;',
    '&#128125;',
    '&#128075;',
    '&#128035;',
    '&#127774;',
    '&#127770;',
    '&#127921;',
    '&#129381;',
    '&#128126;',
    '&#128125;',
    '&#128075;',
    '&#128035;' 
]
let selectedElems = [];
let counter = 0;
let attempsCounter = 0;
let pairs = 0;

function generateGames(){
    const tmpIcons = [...icons];
    let arrLength = tmpIcons.length;
    for (let i = 0; i < 16; i++) {
        const index = getRandomInt(arrLength);
        const icon = tmpIcons[index];
        tmpIcons.splice(index,1);
        const cardReal = document.createElement('div');
        const cardFake = document.createElement('div');
        cardReal.classList.add('game-box', 'game-box-real');
        cardReal.innerHTML=icon;
        cardFake.classList.add('game-box', 'game-box-fake');
        cardFake.dataset.value=i;
        cardReal.dataset.value=i;
        gameFake.appendChild(cardFake);
        gameReal.appendChild(cardReal);
        arrLength--;   
    }

    rotateElem();
}

function rotateElem(){
    const fakes = [...document.querySelectorAll('.game-box-fake')];
    const reals = [...document.querySelectorAll('.game-box-real')];
    fakes.forEach(fake => {
        fake.addEventListener('click', (e)=>{
            attempsCounter++;
            attemps.innerHTML="Attemps: " + attempsCounter;
            const value = e.target.getAttribute('data-value');
            const real = reals.find((elem) => elem.getAttribute('data-value') === value);
            fake.classList.add('rotate');
            real.classList.add('rotate2');
            if(counter < 2){
                selectedElems.push(real);
                counter++;
            }

            if(counter===2){
                compareElems(selectedElems);
            }
        }) 
    });
}

function compareElems(elems){
    elems[0].innerHTML === elems[1].innerHTML ? elemsMatch(elems) : elemsNotMatch(elems);
}

function elemsMatch(elems){
    elems.forEach(element => {
        element.classList.add('matching');
    });
    clearElems();
    pairs++;
    pairs === 8 ?  setTimeout(()=> { alert('You won!'); restartGame();}, 1000 ) : '';
}

function elemsNotMatch(elems){
    const fakes = [...document.querySelectorAll('.game-box-fake')];
    clearElems();
    setTimeout(() =>{
        elems.forEach(elem=>{
            elem.classList.remove('rotate2');
            const fake = fakes.find((fake) => elem.getAttribute('data-value') === fake.getAttribute('data-value'));
            fake.classList.remove('rotate');
        })
    }, 500);
}

function clearElems(){
    counter=0;
    selectedElems=[];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function restartGame(){
    clearElems();
    attempsCounter=0;
    attemps.innerHTML = '';
    gameFake.innerHTML = '';
    gameReal.innerHTML = '';
    generateGames();
}

restart.addEventListener('click', (e)=>{
    restartGame();
});

generateGames();
