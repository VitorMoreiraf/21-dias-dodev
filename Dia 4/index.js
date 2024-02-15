let temFome = prompt("Olá, você está com fome? (sim/nao)");
let temDinheiro = prompt("Você tem dinheiro?");
let restauranteAberto = prompt("O restaurante está aberto?");

if(temFome === "nao" || temDinheiro === "nao") {
    console.log("Hoje a janta será em casa");
}else if(temDinheiro === "sim" && restauranteAberto === "sim"){
   console.log("Hoje a janta será no seu restaurante preferido!");
} else{
     console.log("Peça um delivery!");
}