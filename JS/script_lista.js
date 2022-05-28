var select = document.getElementById("selecionar-moeda");

var opcaoTexto = select.options[select.selectedIndex].text;
var opcaoValor = select.options[select.selectedIndex].value;

console.log(opcaoTexto); 
console.log(opcaoValor); 