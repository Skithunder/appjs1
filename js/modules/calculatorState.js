// Class to manage the state and history of the calculator
export class CalculatorState {
    constructor() {
        // Initialize the calculator state
        this.num1 = 0; // First number
        this.num2 = 0; // Second number
        this.currentOperation = null; // Current operation to be performed
        this.history = {
            numberValues: [], // History of input numbers
            resultValues: [], // History of results
            operatorsInputted: [], // History of operators used
            calculations: [], // History of calculations
        };
    }

    // Method to perform the current operation and update the result
    equals(calculate) {
        this.addNumberValue(); // Add the current display value to the number history
    
        // Check if there are at least two numbers to perform the operation
        if (this.history.numberValues.length < 2) {
            alert("Please enter a second number"); // Alert if there are not enough numbers
            return; // Exit the method
        } else {
            // Check if there are operators to perform the calculation
            if (this.history.operatorsInputted.length < 1) {
                alert("Please enter an operator"); // Alert if there are no operators
                return; // Exit the method
            }

            const numbers = [...this.history.numberValues]; // Spread the number values into a new array
            const operators = [...this.history.operatorsInputted]; // Spread the operators into a new array
            let result = numbers.shift(); // Initialize result with the first number

            // Apply each operator to the subsequent number
            while (numbers.length > 0 && operators.length > 0) {
                const operator = operators.shift();
                const num = numbers.shift();
                if (calculate[operator]) {
                    result = calculate[operator](result, num);
                } else {
                    alert(`Invalid operator: ${operator}`); // Alert if the operator is invalid
                    return; // Exit the method
                }
            }

            this.history.resultValues.push(result); // Store the result in history
            this.history.calculations.push(`${this.history.numberValues.join(' ')} = ${result}`); // Store the calculation in history
        }
    }

    // Method to add the current number to the history
    addNumberValue() {
        // Assuming there's a method to get the current display value
        const currentValue = this.getCurrentDisplayValue();
        this.history.numberValues.push(currentValue);
    }

    // Placeholder method to get the current display value
    getCurrentDisplayValue() {
        // This method should return the current value displayed on the calculator
        return 0; // Placeholder return value
    }
}