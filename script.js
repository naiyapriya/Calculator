let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function appendToDisplay(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        document.querySelector('#display').value = currentDisplay;
    } catch (e) {
        document.querySelector('#display').value = 'Error';
        currentDisplay = '';
    }
}