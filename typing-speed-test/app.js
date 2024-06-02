let string = "";
const textDisplay = document.querySelector('.text-display');
const keys = document.querySelectorAll('.key');
const h2 = document.querySelector('h2');
const retry = document.querySelector('#retry');

let counter = 0;
let timerValue = 60;
let start = false;
let interval;

async function getData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    textDisplay.innerHTML = data.value;
    string = data.value;
}

function setClick(){
    keys.forEach(key => {
        key.addEventListener('click', (e) => {
            string = string.trim();

            if(e.target.textContent == string.charAt(0).toLowerCase()){
                if(!start){
                    start = true;
                    interval = setInterval(timer, 1000);
                }
                string = string.substring(1);
                textDisplay.innerHTML=string;
                counter++;
            }
        })
    });
}

function timer(){
    if(timerValue === 0){
        h2.innerHTML = "You clicked " + counter + ' letters in 60seconds';
        resetData(true);
    }else{
        timerValue = timerValue - 1;
        h2.innerHTML = timerValue + 'seconds'
    }
}

function setRetry(){
    retry.addEventListener('click', (e)=>{
        resetData(false);
        h2.innerHTML = timerValue + 'seconds'
        getData();
    })
}

function resetData(disable){
    keys.forEach(key => {
        key.disabled = disable;
    })
    counter = 0;
    start = false;
    timerValue=60;
    clearInterval(interval);
}

function startApp(){
    getData();
    setClick();
    setRetry();
}


startApp();