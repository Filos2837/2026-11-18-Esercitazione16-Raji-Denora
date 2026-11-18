// Dati questi dati:

 let giochi = ["Minecraft", "FIFA", "GTA", "Fortnite", "Valorant"];
let posizione=giochi.indexOf("GTA");
// Rimuova "GTA" dall'array.
giochi.splice(posizione,1)
// Inserisca "Rocket League" nella stessa posizione.
giochi.splice(posizione,0,"Rocket League")
// Crei un nuovo array contenente solo i primi tre giochi.
let newGiochi=giochi.slice(0,3)
// Stampi entrambi gli array.

console.table(newGiochi)
console.table(giochi)

