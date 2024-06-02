const add = document.querySelector('#increment');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const mainValue = document.querySelector('#main-value');
const value = document.querySelector('#value');
let selectedValue = 1;
let sum = 0;

add.addEventListener('click', function(){
    sum = Number(sum) + Number(selectedValue)
    mainValue.innerHTML = sum.toString();
});

decrease.addEventListener('click', function(){
    sum = Number(sum) - Number(selectedValue)
    mainValue.innerHTML = sum.toString();
});

value.addEventListener('input', function(){
    selectedValue = Number(value.value);
});

reset.addEventListener('click', function(){
    sum = 0;
    mainValue.innerHTML="0";
    value.value = 1;
    selectedValue=1;
})