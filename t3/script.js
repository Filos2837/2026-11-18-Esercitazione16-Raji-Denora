// Traccia 3:

// Dati questi dati:

 const prodotti = [
         { nome: "Tastiera", prezzo: 45, disponibile: true },
         { nome: "Mouse", prezzo: 20, disponibile: false }, 
         { nome: "Monitor", prezzo: 180, disponibile: true }, 
         { nome: "Cavo USB", prezzo: 10, disponibile: true } 
        ];

// estrai solo gli oggetti che hanno disponibile === true

let prodDisp = prodotti.filter( element => element.disponibile===true);
console.table(prodDisp)
console.log(prodDisp.length)
// crea un nuovo array con i prezzi maggiorati dall'iva
let prezzoLordo = prodotti.map(element => element.prezzo *= 1.22  );

let i=0
let prodottiIvati = prodotti.forEach(element => {
       return  {nome: element.nome, prezzo : prezzoLordo[i++], disponibile: element.disponibile}

})
console.table(prodottiIvati)

// calcolare quanti articoli ci sono nel magazzino
// stampare il nome e il prezzo di ogni prodotto