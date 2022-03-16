const num1 = Number(prompt("Inserisci il primo numero"));
const num2 = Number(prompt("Inserisci il secondo numero"));

if (num1 > num2) {
  document.getElementById("num").innerHTML = `${num1} è più grande di ${num2}`;
} else if (num1 == num2) {
  document.getElementById("num").innerHTML = "I numeri sono uguali";
} else {
  document.getElementById("num").innerHTML = `${num2} è più grande di ${num1}`;
}