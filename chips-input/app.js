const input = document.querySelector('#chip-input');
const chips  = [];
const container = document.querySelector('.container');
let index = 0;
let counter = 0;
let activeChip = null;

input.addEventListener('keyup', (e) =>{
    if(e.keyCode===13 && input === document.activeElement ){
        index++;
        input.value='';
        saveChip();
        counter=0;

        chips.forEach(element => {
            const remove = element.querySelector('span');
            remove.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
            });
        });
    }
})

input.addEventListener('input', (e) => {
    counter++;
     if(counter===1 && e.target.value.charAt(0) != ' '){
        createChip(e.target.value, false);
    }else if(counter>1 && e.target.value.length>0){
        activeChip = document.querySelector('[data-index="'+index+'"]');
        activeChip.textContent=e.target.value;
    }else if(!e.target.value.length){
        activeChip.remove();
        counter=0;
    }
})

const createChip = (value) =>{
    const chip = document.createElement('div');
    chip.dataset.index=index;
    chip.classList.add('chip');
    chip.textContent=value;
    container.appendChild(chip);
}

const saveChip = () => {
    const x = document.createElement('span');
    x.textContent='x';
    activeChip.appendChild(x);
    chips.push(activeChip);
}

