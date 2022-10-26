const nome = prompt("inserisci il tuo nome");
const cognome =  prompt("inserisci il tuo cognome");
const colore =  prompt("inserisci il tuo colore preferito");

const h2NomeCognomeColore = document.getElementById('maintext')
const passwordGenerata = document.getElementById('password')
password.innerHTML = `la tua password:${nome}${cognome}${colore}21`
h2NomeCognomeColore.innerHTML = `ti chiami ${nome} ${cognome} ,il tuo colore preferito e il ${colore}`