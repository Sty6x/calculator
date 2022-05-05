// Operations
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const division = (a, b) => a / b

function operator(operation, a, b) {
    return operation(a, b)
}

//display text

let buttons = document.querySelectorAll('.buttons')
const display = document.getElementById('display');
let clearButton = document.querySelector('.clear')
console.log(clearButton)
// converts nodelist into array Array.from
let arrButtons = Array.from(buttons);
// storedValues is now modified and can be used with the operations
let storedValues = [];


// MODIFYING OUR storedValues ARRAY
arrButtons.forEach(getDisplayValues)

function getDisplayValues(buttons) {
    buttons.addEventListener('click', () => {
        storedValues.push(buttons.value)
        console.log("stored values array:" + storedValues)
    })
}
// MODIFYING OUR storedValues ARRAY


function clearValues() {
    let i = 0
    while (i < storedValues.length){
        i++
        console.log(storedValues.pop())
        console.log(storedValues)

    }
    display.textContent = [];
}
clearButton.addEventListener('click', clearValues)



function concatValues() {
    let displayValues = '';
    for (let i = 0; i < storedValues.length; i++) {
        displayValues += storedValues[i];
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
        console.log("display values returned: " + concatValues())
        displayText(concatValues());

    })
})


