/*In an inventory system it is important to know if it is necessary to request a certain
product to your supplier according to a minimum quantity required in the warehouse. HE
requires an algorithm that given a quantity in warehouse and a minimum quantity required
indicate whether or not it is necessary to request the product from the supplier.
Examples:
*Quantity in warehouse: 500, Minimum required quantity 100. So it is not necessary
place the order with the supplier.
* Quantity in warehouse: 300, Minimum quantity required 450. So if necessary
place the order with the supplier.
Requirement: use double conditionals.*/

let quantityB = parseInt(prompt("Enter the quantity in stock"));
let quantityR = parseInt(prompt("Enter the required quantity"));

if (quantityB > quantityR) {
    alert("Quantity in stock: " + quantityB + ", Minimum required quantity: " + quantityR + ". Therefore, it is not necessary to place an order with the supplier.");
}

if (quantityB < quantityR) {
    alert("Quantity in stock: " + quantityB + ", Minimum required quantity: " + quantityR + ". Therefore, it is necessary to place an order with the supplier.");
}
