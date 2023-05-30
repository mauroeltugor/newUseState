/*In an electrical appliance store, these are sold on credit and for cash. If the customer buys on credit, the
overall value of the appliance increases by 25%. Create a program that reads from the user the price of a
appliance and the term in months to pay it on credit and show the user the fixed value of the installments
monthly payments that you will have to pay for the appliance*/

let price = parseFloat(prompt("Enter the product price"));
let installments = parseInt(prompt("Enter the number of installments"));
let initialPrice = price + price * 0.25;
let installmentValue = initialPrice / installments;
