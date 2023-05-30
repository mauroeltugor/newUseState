/*Create a program that takes the radius of a circle and prints its area and perimeter.*/

let radius = parseFloat(prompt("Enter the radius of the circle"));
let area = 3.14 * (radius * radius);
let perimeter = 2 * 3.14 * radius;
console.log(`The area is ${area} and the perimeter is ${perimeter}`);
