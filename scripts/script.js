let userInput = document.querySelector('.userInput');
let result = document.querySelector('.resultString')
let btnIndexOf = document.querySelector('.stringIndexOf');
let strSlice = document.querySelector('.stringSlice');
let strUpperCase = document.querySelector('.stringToUpperCase');
let strLowerCase = document.querySelector('.stringToLowerCase');
let strReplace = document.querySelector('.stringReplace');
let strTrim = document.querySelector('.stringTrim');
let strSplit = document.querySelector('.stringSplit');
let strEncrypt = document.querySelector('.stringEncrypt');
let copyResult = document.querySelector('.btnCopy')
let indexOfInput = document.querySelector('.indexOfInput')

const sliceString = (str, i) => {
    return str.slice(i);
}

const stringToUpperCase = (str) => {
    return str.toUpperCase();
}

const stringToLowerCase = (str) => {
    return str.toLowerCase();
}

const replaceString = (str) => {
    return str.replace();
}

const trimString = (str) => {
    return str.trim();
}

strTrim.onclick = function () {
    result.value = trimString(userInput.value);
    userInput.value = '';
}



strUpperCase.onclick = function () {
    console.log('click')
    result.value = stringToUpperCase(userInput.value);
    userInput.value = '';

}

copyResult.onclick = function () {
    navigator.clipboard.writeText(result.value)
        .then(() => {
            console.log('Скопировано')
            copyResult.textContent = 'Скопировано!';

        })
        .catch(error => {
            console.error(`Текст не скопирован ${error}`)
        })

    result.value = '';
}



btnIndexOf.onclick = function (){
    result.value = userInput.value.indexOf(indexOfInput.value)
}


