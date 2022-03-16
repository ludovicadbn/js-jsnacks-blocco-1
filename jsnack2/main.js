const word1 = prompt("Inserisci una parola");
const word2 = prompt("Inserisci una seconda parola");

if (word1.length > word2.length){
  document.getElementById("result").innerHTML = `${word1} è una parola più lunga di ${word2}`;
} else if (word1.length == word2.length) {
  document.getElementById("result").innerHTML = `${word1} e ${word2} hanno la stessa lunghezza`;
} else {
  document.getElementById("result").innerHTML = `${word2} è una parola più lunga di ${word1}`;
}