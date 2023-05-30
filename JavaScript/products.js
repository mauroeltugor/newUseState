/*As part of a billing system, it is necessary to know the unit value and the quantities to be purchased for each of the products in order to calculate the total to be paid.
An algorithm is required that for 1 customer, calculates the value to be paid for N types of products purchased according to the amount to be carried of each type.*/

let quantity = parseInt(prompt("Enter the quantity of products: "));
let count = 0;
let total = 0;
let product;
let amount;
let value;

while (count < quantity) {
  product = prompt("Enter the name of the product: ");
  amount = parseInt(prompt("Enter the quantity of the product to be purchased: "));
  value = parseInt(prompt("Enter the unit value of the product: "));

  let operation = amount * value;
  total += operation;
  console.log("The product", product, "has a value of:", operation);
  count++;
}

console.log("Quantity of products:", quantity);
console.log("The total amount to be paid is:", total);
