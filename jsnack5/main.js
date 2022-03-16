// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

let arr = []

for (i = 0; i < 6; i++) {
  let num = Number(prompt("Inserisci un numero"));
  if (num % 2 == 1) {
    arr.push(num);
  }
  
  document.getElementById("oddArray").innerHTML = JSON.stringify(arr);
}
