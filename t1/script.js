// Dati questi dati:

// let spesa = ["pane", "latte", "uova"];

// Aggiunga "pasta" alla fine dell'array.
// Aggiunga "acqua" all'inizio dell'array.
// Rimuova l'ultimo elemento.
// Rimuova il primo elemento.
// Stampi l'array aggiornato in console.

let spesa = ["pane", "latte", "uova"];
spesa.push("pasta");
console.log(spesa[3]);
spesa.unshift("acqua");
console.log(spesa[0]);
spesa.pop()
console.table(spesa);
spesa.shift()
console.table(spesa);
spesa.forEach(element => {
        console.log(element)
});

