const leftColorInput = document.querySelector('#left-color');
const rightColorInput = document.querySelector('#right-color');
const positionInput = document.querySelector('#position');
const rotationInput = document.querySelector('#rotation');
const ranges=document.querySelectorAll('.gradient-range');
const gradient = document.querySelector('#gradient');
const gradientSpan = document.querySelector('#gradient-span');
const random = document.querySelector('#random');
const copy = document.querySelector('#copy');
const inputs = [leftColorInput, rightColorInput];
const gradients = [gradient, gradientSpan];
const leftRangeColor=document.querySelector('#gradient-left-range-color');
const rightRangeColor=document.querySelector('#gradient-right-range-color');
let currentButton;

let leftColorVal=leftColorInput.value;
let rightColorVal=rightColorInput.value;
let rotationVal='100';
let leftPositionVal='0%';
let rightPositionVal='100%';
let active=0;
let gradientStyle;
let isDraggin=false;


ranges.forEach(elem=>{
    elem.addEventListener('mousedown', (e) =>{
        setActiveButton(elem);
        isDraggin=true;
        currentButton=e.currentTarget;
    })
})

window.addEventListener('mouseup', (e) =>{
    if(isDraggin){
        isDraggin=false;
    }
})

window.addEventListener('mousemove', (e) =>{
    if(isDraggin){
        const parentPosition = gradientSpan.getBoundingClientRect(); 
        if(e.clientX<parentPosition.left){
            currentButton.style.transform=`translateX(${0}px)`
            calculatePosition(0, 1)
        }else if(e.clientX>parentPosition.right-parentPosition.left){
            currentButton.style.transform=`translateX(${parentPosition.right-parentPosition.left-30}px)`
            calculatePosition(parentPosition.right-parentPosition.left, gradientSpan.clientWidth)
        }else{
            currentButton.style.transform=`translateX(${e.clientX-parentPosition.left}px)`;
            calculatePosition(e.clientX-parentPosition.left, gradientSpan.clientWidth)
        }
    }

})

const calculatePosition = (position, width) => {
    console.log(Math.ceil((position/width)*100));
}

inputs.forEach(elem=>{
    elem.addEventListener('blur', (e)=>{
        if(e.target.name.includes('left')){
            leftColorVal='#'+e.target.value;
            leftRangeColor.style.backgroundColor=leftColorVal;
        }else{
            rightColorVal='#'+e.target.value;
            rightRangeColor.style.backgroundColor=rightColorVal;
        }
        e.target.value='#'+e.target.value;
        createBackground();
    })
})

positionInput.addEventListener('blur', (e)=>{
    setPosition(e.target.value);
    createBackground();
})

rotationInput.addEventListener('blur', (e)=>
{
    if(!validRange(0,360,e.target.value)) return;

    rotationVal=e.target.value;
    rotationInput.value=e.target.value + String.fromCharCode(176);
    createBackground();
})

random.addEventListener('click', (e)=>{
    createRandomGradient()
})

copy.addEventListener('click', (e)=>{
    navigator.clipboard.writeText(gradientStyle);
    alert('Copied to clipboard: ' + gradientStyle)
})

const setActiveButton = (elem) =>{
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
}

const createBackground = () => {
    gradientStyle = `linear-gradient(${rotationVal}deg, ${leftColorVal} ${leftPositionVal}, ${rightColorVal} ${rightPositionVal})`
    gradients.forEach(elem=>elem.style.background=gradientStyle)
}

const setPosition = (value) => {
    if(!validRange(0,100,value)) return;

    if(active){
        rightPositionVal=value+'%';
    }else{
        leftPositionVal=value+'%';
    }

    positionInput.value=value+'%';
}

const validRange = (minValue, maxValue, value) => {
    if(value>=minValue && value<=maxValue) return true;

    return false;
}

const createRandomGradient = () =>{
    leftColorVal = getRandomColor();
    rightColorVal = getRandomColor();
    leftColorInput.value = leftColorVal;
    rightColorInput.value = rightColorVal;
    leftRangeColor.style.backgroundColor=leftColorVal;
    rightRangeColor.style.backgroundColor=rightColorVal;
    createBackground()
}

const getRandomColor = () =>{
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const setButtons = () =>{
    leftRangeColor.parentNode.style.transform='translateX(0px)';
    rightRangeColor.parentNode.style.transform=`translateX(${gradientSpan.getBoundingClientRect().right-gradientSpan.getBoundingClientRect().left-30}px)`;
}

createRandomGradient();
setButtons();