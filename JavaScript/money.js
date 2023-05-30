//Given an employee's current salary and rank, calculate the corresponding increase in
// according to the table

let salary = parseFloat(prompt("Enter your salary"));
let category = prompt("Enter your category");
let increase;
let totalSalary;

switch (category) {
  case "1":
    increase = salary * 0.12;
    totalSalary = increase + salary;
    alert(`Your salary with the increase is ${totalSalary}`);
    break;
  case "2":
    increase = salary * 0.10;
    totalSalary = increase + salary;
    alert(`Your salary with the increase is ${totalSalary}`);
    break;
  case "3":
    increase = salary * 0.08;
    totalSalary = increase + salary;
    alert(`Your salary with the increase is ${totalSalary}`);
    break;
  case "4":
    increase = salary * 0.05;
    totalSalary = increase + salary;
    alert(`Your salary with the increase is ${totalSalary}`);
    break;
  default:
    alert("Invalid category");
    break;
}
