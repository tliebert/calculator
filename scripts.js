

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0)  {return "Nice try"}
    return num1 / num2;
}

function operate(num1, operator, num2) {
    result = 0;
    switch (operator) {
        case "+": result = add(num1, num2);
        break;
        case "-": result = subtract(num1, num2);
        break;
        case "/": result = divide(num1, num2);
        break;
        case "*": result = multiply(num1, num2);
        break;
        default: console.log("no operator case matched")
    } 
    return result;
}

//

let displayedNumber = document.querySelector("div#display");
let currentInputNumber = "";
let currentTotal = "";
let operatorValue = "";

const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");

// Number inputs and onclick function

numberButtons.forEach(numberButtonListener);

function numberButtonListener(node) {
    node.addEventListener("click",  numberButtonClickEvent);
}

function numberButtonClickEvent(event) {
    currentInputNumber += event.target.value;
    displayedNumber.textContent = currentInputNumber;
}

// Operator clicks and functions 

operatorButtons.forEach(operatorListener);

function operatorListener(node) {
    node.addEventListener("click", operatorClickEvent);
}

function operatorClickEvent(event) {
    if (!currentTotal) {
        currentTotal = currentInputNumber;
        currentInputNumber = "";
    }
    else {
        evaluateAndUpdate();
    }
    operatorValue = event.target.value;
}

// Main evaluation function 

function evaluateAndUpdate() {
        currentTotal = operate(Number(currentTotal), operatorValue, Number(currentInputNumber));
        displayedNumber.textContent = currentTotal; 
        currentInputNumber = "";
}

// Runs the evaluate and update function only if there's an operator

document.querySelector("#equals").addEventListener("click", equals)

function equals(event) {
    if (operatorValue && currentInputNumber !== "") {
        evaluateAndUpdate();
    }

}

// CE / Clear all button. 

document.querySelector("#clear").addEventListener("click", clearAll)

function clearAll() {
    operatorValue = "";
    displayedNumber.textContent = "";
    currentTotal = ""
    currentInputNumber = ""
}

//Backspace

const backspace = document.querySelector("#erase");
backspace.onclick = function () {
    console.log(currentInputNumber.length)
    currentInputNumber = currentInputNumber.substr(0, (currentInputNumber.length-1));
    console.log(currentInputNumber);
    displayedNumber.textContent = currentInputNumber;
}