let cmimi1 = Number("19.90");
let cmimi2 = Number("8.50");

let sasia1 = 2;
let sasia2 = 3;

let totali1 = cmimi1 * sasia1;
let totali2 = cmimi2 * sasia2;

let porosia = totali1 + totali2;
let tarifa = porosia * 0.10;

let finalja = porosia + tarifa;

console.log("Totali i artikullit 1:", totali1);
console.log("Totali i artikullit 2:", totali2);
console.log("Shuma e porosisë:", porosia);
console.log("Tarifa 10%:", tarifa);
console.log("Shuma finale:", finalja.toFixed(2));
console.log("Tipi i vlerës finale:", typeof finalja.toFixed(2));