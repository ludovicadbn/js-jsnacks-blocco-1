let invitati = [
  "John Doe",
  "Mario Rossi",
  "Gianfranco Scatola",
  "Mary Pillow",
  "Rick Table"
]

const user = prompt("Nome e cognome")
let invitatoTrovato = false

for (i = 0; i < invitati.length; i++){
  if (invitati[i] == user){
    invitatoTrovato = true;
  }
}

if (invitatoTrovato == true){
  document.getElementById("result").innerHTML = "Puoi partecipare alla festa";
} else {
  document.getElementById("result").innerHTML = "Non sei sulla lista non puoi partecipare alla festa";
}
