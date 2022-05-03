// Operations
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const division = (a, b) => a / b

function operator(operation, a, b) {
    return operation(a, b)
}
let newarr = [];

//display text

let buttons = document.querySelectorAll('.buttons')
const display = document.getElementById('display');

// console.log(buttons)

let arrButtons = Array.from(buttons);

const getInputNumberDisplay = arrButtons.map(button => {
    button.addEventListener('click', () => {
        newarr.push(button.value);
        console.log(newarr)
        let displayText = [];
        for (let i = 0; i < newarr.length; i++) {
            displayText += newarr[i];
        }
        display.textContent = displayText
    })
})