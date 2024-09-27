import { Calculate } from './calculate.js';
import { CalculatorState } from './calculatorState.js';

// Class to handle user interactions and use instances of Calculate and CalculatorState
export class Calculator {
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
