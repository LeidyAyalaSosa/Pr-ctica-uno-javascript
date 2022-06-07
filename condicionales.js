let valorUno = "";
let valorDos = "";
let operation = "por";

valorUno = window.prompt("ingrese el primer valor");
operation = window.prompt("ingrese la operaación \n por");
valorDos = window.prompt("ingrese el segundo valor");

if (operation === "por") {
  window.alert(`${valorUno} * ${valorDos} = ${valorUno * valorDos}`);
} else {
  window.alert("Otras operaciones no están permitidas");
}
console.log(valorUno, operation, valorDos, valorUno * valorDos);
