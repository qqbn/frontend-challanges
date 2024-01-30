const leftColorInput = document.querySelector('#left-color');
const rightColorInput = document.querySelector('#right-color');
const positionInput = document.querySelector('#position');
const rotationInput = document.querySelector('#rotation');
const ranges=document.querySelectorAll('.gradient-range');
let leftColorVal;
let rightColorVal;
let positionVal;
let rotationVal;
let leftPositionVal;
let rightPositionVal;
let active=0;


ranges.forEach(elem=>{
    elem.addEventListener('mousedown', (e)=>{
        const found = [...ranges].find(el => el.classList.contains('active'));
        if(!found){
            elem.classList.add('active');
        }else{
            found.classList.remove('active');
            elem.classList.add('active');
        }
    })
})

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
    rotationVal=e.target.value;
})

rotationInput.addEventListener('blur', (e)=>{
    rotationInput.value=e.target.value + String.fromCharCode(176);
})


const createBackground = () => {
    console.log(`linear-gradient(${rotationVal}deg, #${leftColorVal} ${leftPositionVal}%, #${rightColorVal} ${rightPositionVal})`);
    return `linear-gradient(${rotationVal}deg, #${leftColorVal} ${leftPositionVal}%, #${rightColorVal} ${rightPositionVal})`
}


