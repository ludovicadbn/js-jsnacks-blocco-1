const num1 = prompt("Inserisci il primo numero");
const num2 = prompt("Inserisci il secondo numero");

if (num1 > num2) {
  document.getElementById("num").innerHTML = num1;
} else if (num1 == num2) {
  document.getElementById("num").innerHTML = "Pari";
} else {
  document.getElementById("num").innerHTML = num2;
}