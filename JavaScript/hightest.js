/*Create a program that takes three numbers and returns the largest. In case the numbers are the same
should also be displayed to the user.*/

let number1 = parseInt(prompt("Enter the first number"));
let number2 = parseInt(prompt("Enter the second number"));

let isGreater = number1 > number2;
let isSmaller = number1 < number2;
let isEqual = number1 === number2;

alert("Number 1 is greater than Number 2: " + isGreater);
alert("Number 2 is greater than Number 1: " + isSmaller);
alert("Both numbers are equal: " + isEqual);
