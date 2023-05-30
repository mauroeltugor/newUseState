/* Create a program that reads two numbers and displays their product, quotient, addition, and subtraction.*/

let num = parseInt(prompt("Enter a number"));
let num1 = parseInt(prompt("Enter the second number"));

let product = num * num1;
let quotient = num / num1;
let sum = num + num1;
let difference = num - num1;

console.log(`The product of the numbers is ${product}, the quotient is ${quotient}, the sum is ${sum}, and the difference is ${difference}`);

