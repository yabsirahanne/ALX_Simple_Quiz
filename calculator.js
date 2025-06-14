// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
}

// Function to Get Input Values
function getInputValues() {
    return {
        number1: parseFloat(document.getElementById('number1').value) || 0,
        number2: parseFloat(document.getElementById('number2').value) || 0
    };
}

// Event Listener for Each Operation
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    document.getElementById('calculation-result').textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    document.getElementById('calculation-result').textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    document.getElementById('calculation-result').textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    document.getElementById('calculation-result').textContent = divide(number1, number2);
});