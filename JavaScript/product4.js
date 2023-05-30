/*In an inventory system it is important to know if it is necessary to request a certain
product to your supplier according to a minimum quantity required in the warehouse. HE
requires an algorithm that given a quantity in warehouse and a minimum quantity required
indicate whether or not it is necessary to request the product from the supplier. In case it is not necessary
product request, indicate how many units need to be sold to have to
place the order and generate an alert when these units are less than 10.
Examples:
*Quantity in warehouse: 500, Minimum required quantity 100. So it is not necessary
place the order with the supplier. Units that need to be sold: 400.
*Quantity in warehouse: 55, Minimum required quantity 50. So it is not necessary to carry out
the order to the supplier. Units that need to be sold: 5. Alert generated.
* Quantity in warehouse: 300, Minimum quantity required 450. So if necessary
place the order to the supplier.*/

let warehouseQuantity = parseInt(prompt("Enter the quantity in the warehouse: "));
let requiredQuantity = parseInt(prompt("Enter the required quantity: "));

if (quantityB > quantityR) {
    let difference = quantityB - quantityR;
    if (difference < 10) {
        alert("Quantity in stock: " + quantityB + ", Minimum required quantity: " + quantityR + ". Therefore, it is not necessary to place an order with the supplier. Units that need to be sold: " + difference + ". Alert generated.");
    } else {
        alert("Quantity in stock: " + quantityB + ", Minimum required quantity: " + quantityR + ". Therefore, it is not necessary to place an order with the supplier. Units that need to be sold: " + difference);
    }
} else if (quantityB < quantityR) {
    alert("Quantity in stock: " + quantityB + ", Minimum required quantity: " + quantityR + ". Therefore, it is necessary to place an order with the supplier.");
}
