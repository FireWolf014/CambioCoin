const botao  = document.querySelector('#botao');
const saida  = document.querySelector("#saida");
const selectMoedas = document.querySelector('#selectMoedas');
const resumo = document.querySelector('#resumo');
const quant = document.querySelector('#quant');
const botaoLimpar = document.querySelector ('#refresh');
const botaoDepositeAgora = document.querySelector ('#depositeagora');
const divDeposito = document.querySelector('#divDeposito');
const botaoConfirmarCompra = document.querySelector ('#confirmarcompra');
const divCompraFinalizada = document.querySelector('#comprafinalizada');

var totalcompra,quantmoeda,precomoeda;
var quantiadepositada, saldodisponivel;
var validacompra;

botaoDepositeAgora.addEventListener ('click',function(){
  //Pede o valor do depósito por prompt e lança o valor depositado como saldo disponível na divDepósito
  quantiadepositada = prompt("Informe o valor do depósito");
  saldodisponivel = parseFloat(quantiadepositada).toFixed(2);
  divDeposito.innerHTML="Depósito recebido com sucesso!<br><br>Seu saldo é de R$ "+saldodisponivel;
});


selectMoedas.addEventListener ('change',function() {
  //A cada mudança no campo selecionado do select, mostra na div saída a cotação da moeda escolhida
  saida.innerHTML="A cotação atual da moeda escolhida é de R$: "+selectMoedas.value
});


botao.addEventListener('click',function(){ 
  //Multiplica a cotação da moeda pela quantidade pretendida e mostra qual será o valor da compra na div resumo
  quantmoeda=parseInt(quant.value);
  precomoeda=parseFloat(selectMoedas.value).toFixed(2);
  totalcompra= quantmoeda * precomoeda;
  resumo.innerHTML="O valor da compra será de: R$ "+ totalcompra.toFixed(2)+". Você confirma a transação?";
})


botaoConfirmarCompra.addEventListener ('click',function(){
//verifa se o saldo é suficiente para a compra
  if (saldodisponivel >= totalcompra){
      validacompra = saldodisponivel-totalcompra; 
      divCompraFinalizada.innerHTML="Compra realizada com sucesso!"
      pause;    
  }  
    else {
      divCompraFinalizada.innerHTML="Saldo insuficiente! Redefina os valores da compra ou deposite mais dinheiro"
    pause; 
    }
})


botaoLimpar.addEventListener ('click', ()=>{
  //ao clicar no botão limpar o navegador recarrega a página. Com isso todos os valores são zerados
  location.reload()
})