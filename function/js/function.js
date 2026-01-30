const operatorBox = document.getElementById('operatorBox');
const valueBox = document.getElementById('valueBox');

let firstValue = "";
let operator = "";



function appendToDisplay(value) {
    if(valueBox.value === "0") {
    valueBox.value = value;
   } else {
    valueBox.value += value;
   }
}

function clearDisplay() {
    valueBox.value = "0";
    operatorBox.value = "";
    firstValue ="";
    operator ="";
}

function operatorToDisplay(op) {
    firstValue = valueBox.value;
    operator = op;

    operatorBox.value = op;
    valueBox.value = "0";
}

function backspace() {
    valueBox.value = valueBox.value.slice(0, -1);
    operatorBox.value ="";
    firstValue ="";
    operator ="";
}

function calculateResult() {
    let secondValue = valueBox.value;
    let result = eval(firstValue + operator + secondValue);

    valueBox.value = result;
    operatorBox.value = "";

    firstValue = "";
    operator = "";
}