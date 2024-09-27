import {Calculator} from './modules/calculator.js';

// Create an instance of the Calculator class
const calculator = new Calculator();

// Add event listeners for the calculator buttons
document.getElementById("add").addEventListener("click", () => calculator.setOperation('add'));
document.getElementById("subtract").addEventListener("click", () => calculator.setOperation('subtract'));
document.getElementById("multiply").addEventListener("click", () => calculator.setOperation('multiply'));
document.getElementById("divide").addEventListener("click", () => calculator.setOperation('divide'));
document.getElementById("equals").addEventListener("click", () => calculator.state.equals(calculator.calculate));
document.getElementById("clear").addEventListener("click", () => calculator.state.clear());
document.addEventListener("keydown", (event) => calculator.keyPressed(event));









/* 
// Class to handle basic arithmetic operations
class Calculate {
    // Method to add two numbers
    add(num1, num2) { return num1 + num2; }

    // Method to subtract the second number from the first
    subtract(num1, num2) { return num1 - num2; }

    // Method to multiply two numbers
    multiply(num1, num2) { return num1 * num2; }

    // Method to divide the first number by the second
    divide(num1, num2) { return num1 / num2; }
}

// Class to manage the state and history of the calculator
class CalculatorState {
    constructor() {
        // Initialize the calculator state
        this.num1 = 0; // First number
        this.num2 = 0; // Second number
        this.currentOperation = null; // Current operation to be performed
        this.history = {
            numberValues: [], // History of input numbers
            resultValues: [], // History of results
            operatorsInputtet: [], // History of operators used
            calculations: [], // History of calculations
        };
    }

    // Method to perform the current operation and update the result
    equals(calculate) {
        let sum = 0; // Variable to store the result

        this.addNumberValue(); // Add the current display value to the number history

        // Check if there are at least two numbers to perform the operation
        if (this.history.numberValues.length < 2) {
            alert("Please enter a second number"); // Alert if there are not enough numbers
            return;
        } else {
            // Check if the current operation is valid and perform the calculation
            if (this.currentOperation && calculate[this.currentOperation]) {
                sum = calculate[this.currentOperation](this.num1, this.num2); // Perform the operation

                const operatorSymbols = {
                    'add': '+',
                    'subtract': '-',
                    'multiply': '*',
                    'divide': '/'
                };
                
                const calculation = `${this.num1}${operatorSymbols[this.currentOperation]}${this.num2}=${sum}`; // Create the calculation string
                this.currentOperation = null; // Reset the current operation
                this.history.resultValues.push(sum); // Add the result to the history
                this.history.calculations.push(calculation); // Add the calculation to the history
                document.getElementById('history').value =  "Result history\n" + this.history.calculations.join("\n"); // Update the result history display
            }
        }
    }

    // Method to clear the calculator state and history
    clear() {
        this.history.calculations = []; // Clear the number history
        this.num1 = 0; // Reset the first number
        this.num2 = 0; // Reset the second number
        document.getElementById('history').value =  "Result history\n" + this.history.calculations.join("\n"); // Update the result history display
    }

    // Method to add the current display value to the number history
    addNumberValue() {
        const displayElement = document.getElementById("display"); // Get the display element
        const value = displayElement.value; // Get the current value from the display

        if (value === "") {
            // Do nothing if the display is empty
        } else {
            this.history.numberValues.push(value); // Add the value to the number history
            displayElement.value = ""; // Clear the display
            // Convert all elements in numberValues to integers
            this.history.numberValues = this.history.numberValues.map(value => parseInt(value, 10));
            if (this.history.numberValues.length >= 2) {
                this.num1 = this.history.numberValues[this.history.numberValues.length - 2]; // Set the first number
                this.num2 = this.history.numberValues[this.history.numberValues.length - 1]; // Set the second number
            }
        }
    }
}

// Class to handle user interactions and use instances of Calculate and CalculatorState
class Calculator {
    constructor() {
        this.calculate = new Calculate(); // Instance of Calculate class
        this.state = new CalculatorState(); // Instance of CalculatorState class
    }

    // Method to handle key presses
    keyPressed(pressed) {
     //   console.log(pressed.key); // Log the key pressed
        switch (pressed.key) {
            case "Enter": this.state.equals(this.calculate); break; // Perform equals operation
            case "Escape": this.state.clear(); break; // Clear the calculator
            case "+": this.setOperation('add'); break; // Set operation to add
            case "-": this.setOperation('subtract'); break; // Set operation to subtract
            case "*": this.setOperation('multiply'); break; // Set operation to multiply
            case "/": this.setOperation('divide'); break; // Set operation to divide
            default: break; // Do nothing for other keys
        }
    }

    // Method to set the current operation
    setOperation(operation) {
        this.state.currentOperation = operation; // Set the current operation symbol
        this.state.addNumberValue(); // Add the current display value to the number history
        setTimeout(() => {
            document.getElementById("display").value = ""; // Clear the display
        }, 1);
        this.state.history.operatorsInputtet.push(this.state.currentOperation); // Add the operation to the history
    }
}
 *//* let num1 = 0;
let num2 = 0;
let currentOperation = null;

class Calculate {
    add() { return num1 + num2;};
    subtract() { return num1 - num2;};
    multiply() { return num1 * num2;};
    divide() { return num1 / num2;};
};

const calculate = new Calculate();

let history = {
    numberValues : [],
    resultValues : [],
    operatorsInputtet : [],
};

function keyPressed(pressed) {
    console.log(pressed.key);
    switch (pressed.key) {
        case "Enter": equals(); break;
        case "Escape": clear(); break;
        case "+": setOperation('add'); break;
        case "-": setOperation('subtract'); break;
        case "*": setOperation('multiply'); break;
        case "/": setOperation('divide'); break;
        default: break;
 }
}

function setOperation(operation) {
    currentOperation = operation;
    addNumberValue();
    setTimeout(function() {
        document.getElementById("display").value = "";
    }, 1);
    history.operatorsInputtet.push(operation);
    console.log(history.operatorsInputtet);
    document.getElementById("operators").value = "Operator history\n" + history.operatorsInputtet.join(" ");
}


function addNumberValue() {
    const displayElement = document.getElementById("display");
    const value = displayElement.value;

    if (value === "") {
   // alert("Please enter a number");
    } else {
    history.numberValues.push(value);
    displayElement.value = "";
    // Convert all elements in numberValues to integers
    history.numberValues = history.numberValues.map(value => parseInt(value, 10));
    console.log(history.numberValues);
    document.getElementById("history").value = "Input number history\n" + history.numberValues.join(" ");
    if (history.numberValues.length >= 2) {
    num1 = history.numberValues[history.numberValues.length - 2];
    num2 = history.numberValues[history.numberValues.length - 1];
}
    }
}

function clear() {
    // Implementation of clear function
    history.numberValues = [];
    num1 = 0; num2 = 0;
    document.getElementById("result").value = "";
    document.getElementById("display").value = "";
    document.getElementById("history").value = "Input number history\n" + history.numberValues.join(" ");
}


function equals() {
    // Implementation of equals function
    let sum = 0;
    // const operations = ['add', 'subtract', 'multiply', 'divide'];

    addNumberValue();

    if (history.numberValues.length < 2) {
        alert("Please enter a second number");
        return;
    } else {
        if (currentOperation && calculate[currentOperation]) {
            sum = calculate[currentOperation]();
            currentOperation = null;
            console.log(sum);
            document.getElementById('result').value = "Calculation result:  " + sum;
            history.resultValues.push(sum);
            setTimeout(function() {
                document.getElementById("memory").value = "Result history\n" + history.resultValues.join(" ");
            }, 1);
        }
    }
}


document.getElementById("add").addEventListener("click", function() { setOperation('add'); });
document.getElementById("subtract").addEventListener("click", function(){setOperation('subtract');});
document.getElementById("multiply").addEventListener("click", function() { setOperation('multiply'); });
document.getElementById("divide").addEventListener("click", function() { setOperation('divide'); });
document.getElementById("equals").addEventListener("click", equals);
document.getElementById("clear").addEventListener("click", clear);

document.addEventListener("keydown", keyPressed);



/* function add() {
    // Implementation of add function
    add = true;
    console.log(add);
    addNumberValue();
    
}

function subtract() {
    // Implementation of subtract function
    subtract = true;
    addNumberValue();
}

function multiply() {
    // Implementation of multiply function
    multiply = true;
    addNumberValue();
}

function divide() {
    // Implementation of divide function
    divide = true;
    addNumberValue();
} */

    /*     if (numberValues.length < 2) {
        alert("Please enter a second number");
        return;
    } else {
        for (let operation of operations) {
            if (window[operation] === true ) { // what does window do is it neccesary
                sum += calculate[operation]();
                window[operation] = false;
                console.log(sum);
                console.log(operation);
                document.getElementById('result').value = "Calculation result:  " + sum;
                break;
            }
        }
    } */
    

/*     addNumberValue();
    if (numberValues.length < 2) {
        alert("Please enter a second number");
        return;
    } else {
    const sum = numberValues[numberValues.length-1] + numberValues[numberValues.length - 2];
    numberValues.push(sum);
    console.log(numberValues);
    console.log(numberValues[numberValues.length-1]);


        numberValues.push(sum);
    console.log(numberValues);
     numberValues.length = 0;
    }
} */


/*  example of how to create a calculator object
    let beregn = {
        num1: 0,
        sum: 0,
        add: function() {
            return this.sum +=num1;
        },
    };


*/ 