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

// converts nodelist into array Array.from
let arrButtons = Array.from(buttons);
// storedValues is now modified and can be used with the operations
let storedValues = [];

// MODIFYING OUR storedValues ARRAY
function getDisplayValues(buttons) {
    buttons.addEventListener('click', () => {
        console.log(buttons.value)
        storedValues.push(buttons.value)
        console.log(storedValues)
    })
}
arrButtons.forEach(getDisplayValues)
// MODIFYING OUR storedValues ARRAY




// concatenate the elements of the and displays the value
// on our calculator display
function displayText() {
    arrButtons.forEach(buttons => {
        buttons.addEventListener('click', () => {
            let displayValues = '';
            for (let i = 0; i < storedValues.length; i++) {
                displayValues += storedValues[i];
            }
            display.textContent = displayValues
        })
    })
}
displayText();
// concatenate the elements of the and displays the value
// on our calculator display



// console logging values
arrButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        console.log("storedValues: " + storedValues)

    })
})


