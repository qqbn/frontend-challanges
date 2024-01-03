const blob = document.querySelector('.blob');
const height = document.querySelector('#height');
const width = document.querySelector('#width');
const leftTop = document.querySelector('#left-top');
const leftBottom = document.querySelector('#left-bottom');
const rightTop = document.querySelector('#right-top');
const rightBottom = document.querySelector('#right-bottom');
const inputs = document.querySelectorAll('.range-input');
const code = document.querySelector('.code');
const copy = document.querySelector('.copy');
let styleArr = ['', '', '', '', '/', '', '', '', ''];

height.addEventListener('input', (e) => {
    blob.style.height=e.target.value+'px';
})

width.addEventListener('input', (e) => {
    blob.style.width=e.target.value+'px';
})

inputs.forEach((elem) => {
    elem.addEventListener('input', (e) => {
        styleArr.splice(0,1,leftTop.value+'%');
        styleArr.splice(1,1,(100-leftTop.value)+'%');
        styleArr.splice(2,1,(100-leftBottom.value)+'%');
        styleArr.splice(3,1,leftBottom.value+'%');
        styleArr.splice(6,1,rightTop.value+'%');
        styleArr.splice(7,1,(100-rightTop.value)+'%');
        styleArr.splice(5,1,rightBottom.value+'%');
        styleArr.splice(8,1,(100-rightBottom.value)+'%');
        const style = styleArr.join(' ');
        blob.style.borderRadius = style;
        code.innerHTML = 'border-radius: ' + style+';';
    })
})

copy.addEventListener('click', (e) => {
    navigator.clipboard.writeText(code.innerHTML);
    alert('code copied');
})
