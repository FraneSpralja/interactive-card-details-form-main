// VARIABLES
const formulario = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');

const regexNum = /[1-9]/g;
const regexLetter = /[a-z]/gi

// EVENT LISTENER
eventListener()

function eventListener() {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()

        formValidation()

        nameInput.addEventListener('input', validationName(regexLetter, nameInput));
        numberInput.addEventListener('input', validationNumber(regexNum, numberInput));
        monthInput.addEventListener('input', validationNumber(regexNum, monthInput));
        yearInput.addEventListener('input', validationNumber(regexNum, yearInput));
        cvcInput.addEventListener('input', validationNumber(regexNum, cvcInput));

    })
}

// FUNCTION

function formValidation() {
    const allInput = document.querySelectorAll('#form input')

    for(let i = 0; i < allInput.length; i++) {
        const input = allInput[i]
        if(input.value == '') {
            input.classList.add('val-error');
            printMesagge("Can't be blank")
        }
    }
}

function validationNumber(regex, input) {
        const cardNumberValidation = regex.test(input.value)
    
        if(cardNumberValidation){
            if(input.classList.contains('val-error')) input.classList.remove('val-error')
        }else{
            input.classList.add('val-error')
            printMesagge('Wrong format, number only')
        }
}

function validationName(regex, input){
    const nameValidation = regex.test(input.value)

    if(nameValidation){
        if(input.classList.contains('val-error')) input.classList.remove('val-error')
    }else{
        input.classList.add('val-error')
        printMesagge("Name can't have numbers")
    }
}

function printMesagge(msg) {
    console.log(msg)
}