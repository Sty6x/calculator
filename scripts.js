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
function clearValues() {
    let i = 0
    let j = 0
    while (i < storedDisplayValues.length) {
        i++
        storedDisplayValues.pop()

    }
    while (j < storedCalcValues.length) {
        j++
        storedCalcValues.pop()

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

arrButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        displayText(concatValues());
    })
})


// on our calculator display
const displayText = (concatenate) => {
    display.textContent = concatenate
}
// on our calculator display





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
    // let arr = []
    let firstPair = 0;

    for (let i = 0; i < storedCalcValues.length; i++) {
        arr.push(storedCalcValues[i])
    }
    // console.log("is a array:" + arr)
    // console.log(storedCalcValues)

    let i = 0;
    while (i < arr.length) {
        storedCalcValues.pop()
        i++
    }
    // console.log("Aarray:" + arr)
    // console.log("is storedcalcVal: " + storedCalcValues)
    
    return arr
}


// find a way to get the second pair value

arrButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        let a,b;
        if (buttons.classList.contains('addition')) {
            // returns array
            aValue = getValuePair(a);
            
        }
        if (buttons.classList.contains('equal')) {
            bValue = getValuePair(b)
            console.log(aValue)
            console.log(bValue)
            console.log(aValue)
            // console.log("a and b:" + aValue,bValue)
        }
        
    })
})