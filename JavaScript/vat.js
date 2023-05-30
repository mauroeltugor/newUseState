/*In a supermarket you have the following products: lentils, cream, rice and wine. lentils and rice
They pay VAT, wine and cream yes. Create a program named after one of the products
mentioned and show if the product pays VAT or not.*/

let product = prompt("Enter a product");
let hasVAT = product === "crema" || product === "vino";
alert("The product has VAT: " + hasVAT);
