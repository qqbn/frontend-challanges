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

let leftColorVal=leftColorInput.value;
let rightColorVal=rightColorInput.value;
let rotationVal='100';
let leftPositionVal='0%';
let rightPositionVal='100%';
let active=0;
let gradientStyle;
let isDraggin=false;


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
        isDraggin=true;
    })

    elem.addEventListener('mouseup', (e) =>{
        isDraggin=false;
    })

    elem.addEventListener('mousemove', (e) =>{
        if(isDraggin){
            const eventPosition = e.target.getBoundingClientRect();
            const parent = e.target.parentNode;
            const parentPosition = parent.getBoundingClientRect();
            const fixed = Math.round(Math.abs(e.clientX - parentPosition.right));
            console.log(fixed);
            console.log(fixed/200 * 100);
            // e.target.style.position.right
        }
    })
})

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

createRandomGradient();
