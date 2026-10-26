const prompt = require('prompt-sync')();

console.log("=== Week 1: Basic Arithmetic Calculator ===");

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;

let division;
if (num2 === 0) {
    division = "Undefined (Cannot divide by zero)";
} else {
    division = num1 / num2;
}

console.log("\n--- Results ---");
console.log(`${num1} + ${num2} = ${addition}`);
console.log(`${num1} - ${num2} = ${subtraction}`);
console.log(`${num1} * ${num2} = ${multiplication}`);
console.log(`${num1} / ${num2} = ${division}`);
console.log("----------------");