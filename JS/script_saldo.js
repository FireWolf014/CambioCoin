var deposito, x;

deposito=prompt("Qual é o valor do depósito?");
x=parseInt(deposito);

document.querySelector(".divDeposito").innerHTML=
"Depósito recebido com sucesso!<br><br>Seu saldo é de R$ "+x+",00.";

var select = document.getElementById("selecionar-moeda");

var opcaoTexto = select.options[select.selectedIndex].text;
var opcaoValor = select.options[select.selectedIndex].value;

console.log(opcaoTexto); 
console.log(opcaoValor); 