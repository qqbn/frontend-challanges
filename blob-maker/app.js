const blob = document.querySelector('.blob');
const height = document.querySelector('#height');
const width = document.querySelector('#width');
const leftTop = document.querySelector('#left-top');
const leftBottom = document.querySelector('#left-bottom');
const rightTop = document.querySelector('#right-top');
const rightBottom = document.querySelector('#right-bottom');



height.addEventListener('input', (e) => {
    blob.style.height=e.target.value+'px';
})

width.addEventListener('input', (e) => {
    blob.style.width=e.target.value+'px';
})

leftTop.addEventListener('input', (e) => {
    blob.style.borderTopLeftRadius=e.target.value+'%';
})

leftBottom.addEventListener('input', (e) => {
    blob.style.borderBottomLeftRadius=e.target.value+'%';
})

rightTop.addEventListener('input', (e) => {
    blob.style.borderTopRightRadius=e.target.value+'%';
})

rightBottom.addEventListener('input', (e) => {
    blob.style.borderBottomRightRadius=e.target.value+'%';
})
