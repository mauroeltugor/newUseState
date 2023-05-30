/*Create a program that reads a number and shows whether or not it is divisible by five. Make a version with
conditionals and another with switch-case structure.*/

let number = parseInt(prompt("Enter a number"));
let isDivisible = number % 5 === 0;

switch (isDivisible) {
  case true:
    alert("The number is divisible by 5.");
    break;
  case false:
    alert("The number is NOT divisible by 5.");
    break;
  default:
    alert("Invalid input. Please enter a valid number.");
    break;
}
