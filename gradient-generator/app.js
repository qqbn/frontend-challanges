const leftColorInput = document.querySelector('#left-color');
const rightColorInput = document.querySelector('#right-color');
const positionInput = document.querySelector('#position');
const rotationInput = document.querySelector('#rotation');
const ranges=document.querySelectorAll('.gradient-range');
let leftColorVal=leftColorInput.value;
let rightColorVal=rightColorInput.value;
let positionVal;
let rotationVal='100';
let leftPositionVal='0%';
let rightPositionVal='100%';
let active=0;
const inputs = [leftColorInput, rightColorInput]


ranges.forEach(elem=>{
    elem.addEventListener('click', (e)=>{
        active=Number(elem.getAttribute('data-id'));
        const found = [...ranges].find(el => el.classList.contains('active'));
        
        positionInput.value='';
        if(active){
            positionInput.value=rightPositionVal;
        }else{
            positionInput.value=leftPositionVal;
        }

        if(!found){
            elem.classList.add('active');
        }else{
            found.classList.remove('active');
            elem.classList.add('active');
        }
    })

    elem.addEventListener('mousedown', (e) =>{
        console.log('mousedown');
    })
})

inputs.forEach(elem=>{
    elem.addEventListener('blur', (e)=>{
        if(e.target.name.includes('left')){
            leftColorVal='#'+e.target.value;
        }else{
            rightColorVal='#'+e.target.value;
        }
        e.target.value='#'+e.target.value;
        createBackground();
    })
})

positionInput.addEventListener('blur', (e)=>{
    setPosition(e.target.value+'%');
    createBackground();
})

rotationInput.addEventListener('blur', (e)=>
{
    rotationVal=e.target.value;
    rotationInput.value=e.target.value + String.fromCharCode(176);
    createBackground();
})


const createBackground = () => {
    console.log(`linear-gradient(${rotationVal}deg, ${leftColorVal} ${leftPositionVal}, ${rightColorVal} ${rightPositionVal})`);
    return `linear-gradient(${rotationVal}deg, #${leftColorVal} ${leftPositionVal}%, #${rightColorVal} ${rightPositionVal})`
}

const setPosition = (value) => {
    if(active){
        rightPositionVal=value;
    }else{
        leftPositionVal=value;
    }
    positionInput.value=value
}
