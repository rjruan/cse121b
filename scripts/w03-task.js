/* Function Declaration - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration - Add Numbers from HTML Form Controls */
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Add Click Event Listener for Adding Numbers */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;};

/* Function Expression - Subtract Numbers from HTML Form Controls */
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

/* Add Click Event Listener for Subtracting Numbers */
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Arrow Function - Multiply Numbers from HTML Form Controls */
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

/* Add Click Event Listener for Multiplying Numbers */
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Function Declaration and Arrow Function - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

/* Add Click Event Listener for Dividing Numbers */
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Event Listener for Get Total Due Button */
document.querySelector('#getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field.
    let subtotal = Number(document.querySelector('#subtotal').value);

    // Check IF the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount.
    if (document.querySelector('#membership').checked) {
        subtotal *= 0.8; // 20% discount
    }

    // Output the total to the total span in the format shown with two decimals using a template string.
    document.querySelector('#total').textContent = `Total: $${subtotal.toFixed(2)}`;
});

/* Array Declaration */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Filter Odd Numbers */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0).join(', ');

/* Filter Even Numbers */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Reduce to Sum Array Elements */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);

/* Map to Multiply Each Element by 2 */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2).join(', ');

/* Map and Reduce to Sum Multiplied Elements */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
