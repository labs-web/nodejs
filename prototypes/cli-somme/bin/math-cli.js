#!/usr/bin/env node

import { Add } from '../src/add.js';
import { Subtract } from '../src/subtract.js';

// Récupérer les arguments passés à la CLI
const [,, operation, num1, num2] = process.argv;

if (!operation || !num1 || !num2) {
  console.error("Usage: math-cli <operation> <num1> <num2>");
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.error("Error: Both arguments must be valid numbers.");
  process.exit(1);
}

switch (operation) {
  case "add":
    console.log(`Result: ${Add.calculate(a, b)}`);
    break;
  case "subtract":
    console.log(`Result: ${Subtract.calculate(a, b)}`);
    break;
  default:
    console.error("Error: Unsupported operation. Use 'add' or 'subtract'.");
    process.exit(1);
}