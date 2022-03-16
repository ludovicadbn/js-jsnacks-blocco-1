let result = 0;

for (i = 0; i < 10; i++) {
  let num = Number(prompt("Inserisci un numero"));
  result += num;
}

document.getElementById("num").innerHTML = result;
