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
let storedCalcValues = [];
const storedDisplayValues = []
display.textContent = 0; //cheat

// MODIFYING OUR STORED ARRAYs
function getValues(value) {
    arrButtons.forEach((buttons) =>
        buttons.addEventListener('click', () => {
            value.push(buttons.value)
        }))

}
getValues(storedDisplayValues)
getValues(storedCalcValues)
// MODIFYING OUR storedValues ARRAY


// not emptying storedValues array 
// need to click multiple times
const clearValue = () => window.location.reload();
clearButton.addEventListener('click', clearValue)



function concatValues() {
    let displayValues = '';
    for (let i = 0; i < storedDisplayValues.length; i++) {
        displayValues += storedDisplayValues[i];
    }
    return displayValues;
}

const displayText = (concatenate) => display.textContent = concatenate



// make a separate function for the calculator
// make a function that checks and removes operator from each button of the array
// check if any elements of the array contains the "operator"
// class name and if so delete it from the array

function removeOperatorClass(buttons) {
    buttons.addEventListener('click', () => {
        console.log(storedCalcValues)
        if (buttons.classList.contains('operator')) {
            // removes the last value inputted (operator)
            storedCalcValues.pop()
        }
    })
}
arrButtons.map(removeOperatorClass)


//get values working
let a = []
let b = []

function getValuePair(arr = []) {
    for (let i = 0; i < storedCalcValues.length; i++) {
        arr.push(storedCalcValues[i])
    }
    let i = 0;
    while (i < arr.length) {
        storedCalcValues.pop()
        i++
    }
    return arr
}


function getValue(value) {
    let retValue = [];
    for (let i = 0; i < value.length; i++) {
        retValue += value[i];
    }
    return +retValue
}


arrButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        displayText(concatValues());
        if (buttons.classList.contains('addition')) {
            aValue = getValue(getValuePair(a));
        }
        if (buttons.classList.contains('equal')) {
            bValue = getValue(getValuePair(b));
            displayText(operator(add, aValue, bValue));
            console.log(operator(add, aValue, bValue));
        }
    })
})