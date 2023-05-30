/*Create a program that reads the three interior angles of a triangle and shows whether the angles correspond to a
triangle or not. Make one version with conditionals and one with switch-case structure.*/

let angle1 = parseInt(prompt("Enter the first angle"));
let angle2 = parseInt(prompt("Enter the second angle"));
let angle3 = parseInt(prompt("Enter the third angle"));

let sumAngles = angle1 + angle2 + angle3;
let isTriangle = sumAngles === 180;

switch (isTriangle) {
  case true:
    alert("It is a triangle.");
    break;
  default:
    alert("It is not a triangle.");
    break;
}
