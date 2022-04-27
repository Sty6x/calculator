const add = (a,b) => a + b
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => a / b


function operator(oprtr, a ,b){
    return oprtr(a,b)
}

console.log(operator(divide,8,2))