/*Create a program that prompts the user for numbers until the user enters the letter z.
Use break statement to break the loop.*/

while (true) {
    letra = prompt("Ingrese un número");
    if (letra == "z"){
        break
    }
    console.log(letra);
}