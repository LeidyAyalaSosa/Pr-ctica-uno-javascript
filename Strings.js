// Declara una variable

let miRefran = "Leña verde no hace buen fuego";

console.log(miRefran);

// Declara una variable para la longitud

let longitudRefran = miRefran.length;

// Asigna una variable para la novena letra

let novenaLetra = miRefran[8];

// Asigna una variable para la última letra

let ultimaLetra = miRefran[longitudRefran];

// Busca el índice de la cadena "que" y asignarlo a una nueva variable. Si el índice es menor a cero buscar cualquier otra preposicion hasta que sea mayor a cero

let indicePalabra = 0;
const preposiciones = [
  "que",
  "la",
  "los",
  "buen",
  "de",
  "desde",
  "hasta",
  "hacia",
  "en",
  "entre",
];

for (let i = 0; indicePalabra <= 0 && i < preposiciones.length; i++) {
  indicePalabra = miRefran.indexOf(preposiciones[i]);
  if (indicePalabra > 0) {
    miRefran = miRefran.replace(preposiciones[i], "exelente"); // Remplazar la preposicion encontrada por la cadena "xxx"
  }
}

console.log(indicePalabra);

//convertir en mayúsculas todos los carácteres de la primera variable

miRefran = miRefran.toUpperCase();

console.log(
  miRefran.length,
  longitudRefran.length,
  novenaLetra.length,
  ultimaLetra,
  miRefran.includes("buen"),
  miRefran.toUpperCase()
);
