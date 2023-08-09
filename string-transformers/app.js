let text = document.querySelector('#text').value;
const textInput = document.querySelector('#text');

textInput.addEventListener('input', ()=>{
    text = textInput.value;
    transformTexts();
})

function transformTexts(){
    textToLowerCase();
    textToUpperCase();
    textToCamelCase();
    textToPascalCase();
    textToSnakeCase();
    textToKebabCase();
    textToTrim();
}

function getSpan(id){
    const span = document.querySelector(id).querySelector('span');
    return span;
}

function textToLowerCase(){
    const span = getSpan('#lowerCase');
    span.innerHTML = text.toLowerCase();
}

function textToUpperCase(){
    const span = getSpan('#upperCase');
    span.innerHTML = text.toUpperCase();
}

function textToCamelCase(){
    const span = getSpan('#camelCase');
    let camelCase = text.toLowerCase().split(' ');
    for(let i=0; i<camelCase.length;i++){
        if(i!==0){
            let newStr = camelCase[i].charAt(0).toUpperCase() + camelCase[i].substring(1);
            camelCase[i] = newStr;
        }
    }
    camelCase = camelCase.join('');
    span.innerHTML = camelCase;
}

function textToPascalCase(){
    const span = getSpan('#pascalCase');
    let pascalCase = text.toLowerCase().split(' ');
    for(let i=0; i<pascalCase.length;i++){
            let newStr = pascalCase[i].charAt(0).toUpperCase() + pascalCase[i].substring(1);
            pascalCase[i] = newStr;
    }
    pascalCase = pascalCase.join('');
    span.innerHTML = pascalCase;
}

function textToSnakeCase(){
    const span = getSpan('#snakeCase');
    let snakeCase = text.toLowerCase().replaceAll(' ', '_');
    span.innerHTML = snakeCase;
}

function textToKebabCase(){
    const span = getSpan('#kebabCase');
    let kebabCase = text.toLowerCase().replaceAll(' ','-');
    span.innerHTML = kebabCase;
}

function textToTrim(){
    const span = getSpan('#trim');
    let trimCase = text.toLowerCase().replaceAll(' ', '');
    span.innerHTML = trimCase;
}

transformTexts();