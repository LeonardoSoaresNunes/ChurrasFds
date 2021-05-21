let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let reultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando..");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) *  adultos +(carnePP(duracao) / 2 * criancas) ;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHtml = '<p>${qtdTotalCarne}g de Carne</p>'
    resultado.innerHtml +='<p>${qtdTotalCerveja}ml de Cerveja</p>'
    resultado.innerHtml +='<p>${qtdTotalBebidas}ml de Bebidas</p>'
}

function carnePP (duracao){
   if (duracao >= 6){
       return 650;
    }else {
        return 400;
    }
}
function cervejaPP (duracao){
    if (duracao >= 6){
        return 2000;
      }else {
         return 1200;
     }
 }

 function bebidasPP (duracao){
    if (duracao >= 6){
        return 1500;
      }else {
         return 1000;
     }
 }

//console.log(inputAdultos.value , inputCriancas.value , inputDuracao.value);
