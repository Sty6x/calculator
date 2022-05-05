// Operations
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const division = (a, b) => a / b

function operator(operation, a, b) {
    return operation(a, b)
}

//display text

const buttons = document.querySelectorAll('.buttons')
const display = document.getElementById('display');
const clearButton = document.querySelector('.clear')

// converts nodelist into array Array.from
const arrButtons = Array.from(buttons);

// storedValues is now modified and can be used with the operations
let storedValues = [];
const storedDisplayValues = []
display.textContent = 0; //cheat

// MODIFYING OUR storedValues ARRAY
// Calculator Values
arrButtons.forEach(getArrayValues)

function getArrayValues(buttons) {
    buttons.addEventListener('click', () => {
        storedValues.push(buttons.value)
        console.log('for calculation')
        console.log(storedValues)
    })
}


// Calculator Display Values
arrButtons.forEach(getDisplayValues)

function getDisplayValues(buttons) {
    buttons.addEventListener('click', () => {
        storedDisplayValues.push(buttons.value)
        console.log('for display')
        console.log(storedDisplayValues)
    })
}
// MODIFYING OUR storedValues ARRAY


// not emptying storedValues array 
// need to click multiple times
function clearValues() {
    let i = 0
    while (i < storedDisplayValues.length) {
        i++
        storedDisplayValues.pop()
    }
    let j = 0
    while (j < storedValues.length) {
        j++
        storedValues.pop()
    }

    display.textContent = 0;
    console.clear()
}
clearButton.addEventListener('click', clearValues)



function concatValues() {
    let displayValues = '';
    for (let i = 0; i < storedDisplayValues.length; i++) {
        displayValues += storedDisplayValues[i];
    }
    return displayValues;
}


// on our calculator display
const displayText = (concatenate) => {
    display.textContent = concatenate
}
// on our calculator display



arrButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {

        displayText(concatValues());
    })
})

// make a separate function for the calculator

// make a function that checks and removes operator from each button of the array
// check if any elements of the array contains the "operator"
// class name and if so delete it from the array

function removeOperatorClass(buttons) {
    buttons.addEventListener('click', () => {
        if (buttons.classList.contains('operator')) {
            console.log('is operator')
            storedValues.pop()
            console.log('popped operator')
            console.log(storedValues)
        }
    })
}
arrButtons.map(removeOperatorClass)