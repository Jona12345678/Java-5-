
let produkti1 = 35;
let produkti2 = 24;
let transporti = 4;

let cmimiParaZbritjes = (2 * produkti1) + produkti2;
let zbritja = cmimiParaZbritjes * 0.15;
let cmimiPasZbritjes = cmimiParaZbritjes - zbritja;
let cmimiFinal = cmimiPasZbritjes + transporti;

console.log("Çmimi para zbritjes: " + cmimiParaZbritjes + " €");
console.log("Zbritja prej 15%: " + zbritja + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Transporti: " + transporti + " €");
console.log("Çmimi përfundimtar: " + cmimiFinal + " €");
