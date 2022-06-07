let edad = prompt("Digita tu edad por favos");
if (Number(edad) == edad) {
  if (edad >= 18) {
    alert("Ya tienes edad para comprar cerveza");
  } else {
    document.write("No puedes comprar cerveza");
  }
} else {
  alert("Digita un valor numerico valido");
}
