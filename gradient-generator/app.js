const leftColorInput = document.querySelector('#left-color');
const rightColorInput = document.querySelector('#right-color');
const positionInput = document.querySelector('#position');
const rotationInput = document.querySelector('#rotation');
let leftColorVal;
let rightColorVal;
let positionVal;


leftColorInput.addEventListener('input', (e)=>{
    leftColorVal=e.target.value;
})

rightColorInput.addEventListener('input', (e)=>{
    rightColorInput=e.target.value;
})

positionInput.addEventListener('input', (e)=>{
    positionVal=e.target.value;
})

positionInput.addEventListener('blur', (e)=>{
    positionInput.value=e.target.value+'%';
})

rotationInput.addEventListener('input', (e)=>{
    rotationVal=e.target.value + '&deg;';
})

rotationInput.addEventListener('blur', (e)=>{
    rotationInput.value=e.target.value + String.fromCharCode(176);
})



