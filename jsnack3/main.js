// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let num = Number(prompt("Inserisci un numero da moltiplicare per 10"));
let result = 0;

for (i = 0; i < 10; i++) {
  result += num;
}

document.getElementById("num").innerHTML = result;