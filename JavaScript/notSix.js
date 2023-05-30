/*Create a program that prints numbers between 1 and 1000 excluding multiples of 6.
Use continue statement.*/

let contador = 0;
while (contador <= 999) {
    contador+=1;
    if (contador % 6 == 0){
        continue
    }
    console.log(contador);
}
