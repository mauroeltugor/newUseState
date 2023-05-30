/*Create a program that reads the age of a user and displays how old the user will be within
of as many years as it indicates. For example, if the user is 20 years old and wants to know how old he will be
15 years from now, the program must show that you will be 35 years old.*/

let age = parseInt(prompt("Enter your age"));
let years = parseInt(prompt("Enter the number of years"));
let total = age + years;
console.log(`Your age in ${years} years will be ${total} years`);
