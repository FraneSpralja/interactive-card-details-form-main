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
        
        nameInput.addEventListener('focus', validationName(regexLetter, nameInput));
        numberInput.addEventListener('focus', validationNumber(regexNum, numberInput));
        monthInput.addEventListener('focus', validationNumber(regexNum, monthInput));
        yearInput.addEventListener('focus', validationNumber(regexNum, yearInput));
        cvcInput.addEventListener('focus', validationNumber(regexNum, cvcInput));


    })
}

// FUNCTION
function validationNumber(regex, input) {
        if(input.value !== ''){
            const cardNumberValidation = regex.test(input.value)
        
            if(cardNumberValidation){
                if(input.classList.contains('val-error')) input.classList.remove('val-error')
            }else{
                input.classList.add('val-error')
                printMesagge('Wrong format, number only', input, 'text')
            }
        }
}

function validationName(regex, input){
    if(input.value !== ''){
        const nameValidation = regex.test(input.value)
        
            if(nameValidation){
                if(input.classList.contains('val-error')) input.classList.remove('val-error')
            }else{
                input.classList.add('val-error')
                printMesagge("Name can't have numbers", input, 'number')
            }
    }
}

function formValidation() {
    const allInput = document.querySelectorAll('#form input')

    for(let i = 0; i < allInput.length; i++) {
        const input = allInput[i]
        if(input.value == '') {
            input.classList.add('val-error');
            printMesagge("Can't be blank", input, 'onblank')
        }
    }
}


function printMesagge(msg, input, type) {
    const formBox = document.querySelectorAll('.form_box')

    for(let i = 0; i < formBox.length; i++){

        if(formBox[i].contains(input)){
            
            const divMessage = document.createElement('div');
            divMessage.classList.add('bloqueMensaje');
        
            const paragraph = document.createElement('p');
            paragraph.classList.add('message', type)
            paragraph.textContent = msg;
        
            divMessage.appendChild(paragraph)
        
            formBox[i].appendChild(divMessage)

            setTimeout(() => {
                divMessage.remove()
            }, 3500)
        }
    }
}