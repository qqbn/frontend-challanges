const range = document.querySelector('input');
const rangeValue = document.querySelector('.range-value');
let [...colorStars] = document.querySelectorAll('.star-color');


range.addEventListener('input', (e)=>{

    colorStars.forEach(element => {
        element.style.width='0';
    });

    let value = Number(e.target.value);
    rangeValue.textContent = e.target.value;

    const arr = [...colorStars];
    arr.splice(Math.ceil(value));
    for (let i = 0; i < arr.length; i++) {
        
        if(i==arr.length-1 && (value % 1 != 0)){
            let decimal = value - Math.floor(value);
            arr[i].style.width=decimal*100+'%';
        }else{
            arr[i].style.width='100%';
        }
        
    }
})