
console.log("===== CALCULATOR =====");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            if (num2 === 0) {
                return "Cannot calculate remainder with zero";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// Test the calculator
console.log(add(10, 5));                 // 15
console.log(subtract(10, 5));            // 5
console.log(multiply(10, 5));            // 50
console.log(divide(10, 5));              // 2
console.log(divide(10, 0));              // Cannot divide by zero
console.log(calculate(10, "%", 3));      // 1
console.log(calculate(2, "**", 3));       // 8
console.log(calculate(10, "?", 5));      // Invalid operator
