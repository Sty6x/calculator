// Operations
const add = (a,b) => a + b
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const division = (a,b) => a / b

function operator(operation, a ,b){
    return operation(a,b)
}



//display text


let button1 = document.querySelector('.one');
let button2 = document.querySelector('.two');
let buttons = document.querySelectorAll('.buttons')
const display = document.getElementById('display');

// console.log(buttons)

let arrButtons = Array.from(buttons);

// need to check if value is not a number and change
// the values into numbers instead of string
const getInputNumbers = arrButtons.map(button => {
    button.addEventListener('click',() =>{
    console.log(+button.value)
    return button.value;})
})

