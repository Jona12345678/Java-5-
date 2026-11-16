let flete = 157;
let grupi = 6;

let grupet = parseInt(flete / grupi);
let mbetja = flete % grupi;

console.log("Grupet e plota:", grupet);
console.log("Fletët e mbetura:", mbetja);

console.log("Kontrolli:", (grupet * grupi) + mbetja);