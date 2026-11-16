
let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totali = aktiviteti + projekti + provimi;
let perqindja = (totali / 100) * 100;

console.log("Para korrigjimit:");
console.log("Totali: " + totali);
console.log("Perqindja: " + perqindja + "%");

provimi = 48;

totali = aktiviteti + projekti + provimi;
perqindja = (totali / 100) * 100;

console.log("Pas korrigjimit:");
console.log("Totali: " + totali);
console.log("Perqindja: " + perqindja + "%");
