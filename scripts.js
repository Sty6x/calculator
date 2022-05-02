const add = (a,b) => a + b
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const division = (a,b) => a / b

function operator(operation, a ,b){
    return operation(a,b)
}

console.log(operator(division,8,2))