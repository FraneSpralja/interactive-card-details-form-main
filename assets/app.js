// VARIABLES
const formulario = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');

const regexNum = /[1-9]/g;
const regexLetter = /[a-z]/gi

const cardObj = {
    serialNumber: '',
    name: '',
    date: '',
    cvc: ''
}

// EVENT LISTENER
eventListener()

function eventListener() {

    printDataOnCard(nameInput)
    printDataOnCard(numberInput)
    printDataOnCard(monthInput)
    printDataOnCard(yearInput)
    printDataOnCard(cvcInput)
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        
        formValidation()
        
        nameInput.addEventListener('focus', validationName(regexLetter, nameInput));
        numberInput.addEventListener('focus', validationNumber(regexNum, numberInput));
        cvcInput.addEventListener('focus', validationNumber(regexNum, cvcInput));

        printDataOnCard(nameInput)
        printDataOnCard(numberInput)
        printDataOnCard(monthInput)
        printDataOnCard(yearInput)
        printDataOnCard(cvcInput)

        setTimeout(() => {
            formulario.remove()
            cardDetailsAdded()
        }, 2000)

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

function printDataOnCard(input) {
    const numberSerie = document.querySelector('.card_down--numberSerie');
    const cardName = document.querySelector('.card_name');
    const cardMonth = document.querySelector('.card_date--month');
    const cardYear = document.querySelector('.card_date--year');
    const cardCvc = document.querySelector('.card_back--down--authNumber > span')

    input.addEventListener('input', () => {
        if(input.id === 'name') {
            cardName.textContent = input.value;
        } else if(input.id === 'number') {
            if(input.value == ''){
                cardNumber.textContent = '0000 0000 0000 0000'
            }
            const cardNumber = input.value.split('');
            cardNumber.splice(4, 0, ' ');
            cardNumber.splice(9, 0, ' ');
            cardNumber.splice(14, 0, ' ');
            numberSerie.textContent = cardNumber.join('');
        } else if(input.id === 'month'){
            cardMonth.textContent = input.value;
        } else if(input.id === 'year') {
            cardYear.textContent = input.value;
        } else if(input.id === 'cvc') {
            cardCvc.textContent = input.value;
        }
    })
}

function cardDetailsAdded() {
    const validationForm = document.querySelector('#validation_form');

    const complete = document.createElement('div');
    complete.classList.add('thanxs_box');

    const checkImg = document.createElement('img');
    checkImg.src = '../images/icon-complete.svg'
    
    const thanxTitle = document.createElement('h3');
    thanxTitle.textContent = 'THANK YOU!';

    const thanxSpan = document.createElement('span');
    thanxSpan.textContent = "We've added your card details";

    const thanxButton = document.createElement('button');
    thanxButton.classList.add('btn-continue');
    thanxButton.textContent = 'Continue'
    thanxButton.onclick = function() {
        location.reload()
    }

    complete.appendChild(checkImg);
    complete.appendChild(thanxTitle);
    complete.appendChild(thanxSpan);
    complete.appendChild(thanxButton);

    validationForm.appendChild(complete)
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