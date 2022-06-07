myArray = [
  "Queen",
  "The Beatles",
  "BTS",
  "One Direction",
  "Guns N' Roses",
  "Mana",
];

console.log(myArray);

const eliminados = myArray.splice(
  0,
  2,
  "[Banda favorina Nº 1]",
  "[Banda favorita Nº 2]"
);
console.log("Eliminado: ", eliminados);

myArray.unshift("Van Halen");

console.log(myArray);

const str = myArray;

str.splice(1, 0, "-");

str.splice(3, 0, "-");

str.splice(5, 0, "-");

str.splice(7, 0, "-");

str.splice(9, 0, "-");

str.splice(11, 0, "-");

console.log(str);

myArrayDos = [1, 888888888888, "Hola Gente", false, null, undefined, "Leidy"];

console.log(myArrayDos);
