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

// console.log(buttons)


let arrButtons = Array.from(buttons);
let newarr = [];

// we want to make a reusable function that returns the numbers inputted


function getNumberInput(button) {
    // this method activates a function on every 'click'
    // of the user
    button.addEventListener('click', () => {

        // pushing button.value to newarr array
        // on every click
        newarr.push(button.value);

        // concactinating all the numbers inputted on the array
        // to a new variable for us to display it on the browser
        // called displayText (a string type) 
        // can be converted to number type using unary operator "+"
        let displayText = '';
        for (let i = 0; i < newarr.length; i++) {
            displayText += newarr[i];
        }

        // blitting the displaytext on our display 
        // on the calculator
        display.textContent = displayText
        console.table(displayText)
    })
}

// .map applies a function(getNumberInput) to each button. 
const getInputNumberDisplay = arrButtons.map(getNumberInput)

