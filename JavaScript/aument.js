/*Write a program that, given the salary of an employee, applies a 12% increase if his salary is less
 to $300,000, or apply a 10% increase if your salary is between $300,000 and $500,000, or apply an increase
 5% otherwise. The worker's new salary must be shown.*/

let salary1 = parseFloat(prompt("Enter your salary"));
let increase1 = 0;
let total1 = 0;

if (salary1 < 300000) {
    increase1 = salary1 * 0.12;
    total1 = increase1 + salary1;
    alert(`Your salary is ${total1}`);
} else if (salary1 <= 500000 || salary1 >= 300000) {
    increase1 = salary1 * 0.10;
    total1 = increase1 + salary1;
    alert(`Your salary is ${total1}`);
} else if (salary1 > 500000) {
    increase1 = salary1 * 0.05;
    total1 = increase1 + salary1;
    alert(`Your salary is ${total1}`);
}
