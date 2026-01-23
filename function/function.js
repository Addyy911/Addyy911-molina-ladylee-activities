const display = document.getElementById('display');

function appendToDisplay(input) {
    if(display.value === "0") {
        display.value = input;
   } else {
    display.value += input;
   }
}

function clearDisplay() {
    display.value ="0";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value ="0";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}


