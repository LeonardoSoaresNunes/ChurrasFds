let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let reultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando..");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;



    let qtdTotalCarne = carnePP(duracao) *  adultos +(400/ 2 * criancas) ;
    console.log(qtdTotalCarne);


}


function carnePP (duracao){
   if (duracao >= 6){
       return 650;

}else {
    return 400;
}

}

console.log(inputAdultos.value , inputCriancas.value , inputDuracao.value);
