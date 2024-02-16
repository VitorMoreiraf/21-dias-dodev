//Criando variáveis 
let nome
let idade
let temCarta = false
let temCarro = false
//Pedindo informações ao usuario
nome = prompt("Olá, digite seu nome?");
parseInt(prompt("Digite sua idade?"));
let opcaocarta = prompt("Você possui carteira? (s/n");
if (opcaocarta == "S") {
  temCarta = true
}
let opcaocarro = prompt("Você tem carro? (s/n)")
if (opcaocarro == "s") {
    temCarro = true 
}

//Exibindo mensagem no console
if(idade < 18 || temCarta) {
console.log(nome + ", Você não pode dirigir.");
}else if(idade >=18 && temCarta && !temCarro) {
console.log( nome + ", Você pode dirigir mais não tem carro.");
}
else{
console.log(nome + ", Você será o motorista!")
}