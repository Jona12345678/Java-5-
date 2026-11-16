let pjesemarres = 45;
let pagesa = 12;

let teArdhurat = pjesemarres * pagesa;

let shpenzimet = 180 + 95 + 60;

let diferenca = teArdhurat - shpenzimet;

console.log("----- RAPORTI FINANCIAR -----");

console.log("Pjesëmarrës:", pjesemarres);
console.log("Pagesa për person:", pagesa, "€");
console.log("Të ardhurat:", teArdhurat, "€");

console.log("Shpenzimet e sallës: 180 €");
console.log("Shpenzimet e materialeve: 95 €");
console.log("Shpenzimet e reklamës: 60 €");

console.log("Shpenzimet totale:", shpenzimet, "€");
console.log("Diferenca fillestare:", diferenca, "€");

shpenzimet += 25;

diferenca = teArdhurat - shpenzimet;

console.log("Shpenzime të paparashikuara: 25 €");
console.log("Shpenzimet e reja totale:", shpenzimet, "€");
console.log("Diferenca e re:", diferenca, "€");

console.log("----- FUNDI I RAPORTIT -----");