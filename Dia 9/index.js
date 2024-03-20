//CRIANDO VÁRIAVEIS
let continuar = "s"
do {

let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("Digite sua idade"));
let peso = prompt("Digite seu peso");
let altura = prompt("Digite sua altura em metros");
let profisao = prompt("Digite sua profissão");

console. log("Olá " + nome + ", você tem " + idade + " anos, é " + profisao + ", tem "
+ altura + "M de altura e pesa " + peso + "Kg.")

//VERIFICANDO IDADE
if (idade >= 18)  {
    console.log("Está liberado para tomar umas geladas.")
} else { 
    console.log("Sem geladas para você.")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

//DESCOBRINDO IDADE FRACIONADA
console.log("Sua idade em meses é:" + meses);
console.log("Sua idade em semanas é:" + semanas);
console.log("Sua idade em dias é:" + dias);

////////////////////////////////////////////////////////

//DESCOBRINDO SEU IMC
IMC = peso / (altura **2)
let imcDoUsuario = IMC.toFixed(2);

if ( imcDoUsuario <= 18.5) {
    console.log("Magreza")
} else if ( imcDoUsuario >= 18.5 && imcDoUsuario <= 24.9) { 
    console.log("Normal")
} else if ( imcDoUsuario >= 24.9 && imcDoUsuario <= 30) { 
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

//DESCOBRINDO SEU ANO DE NASCIMENTO
let anoAtual = 2023
let anoDeNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoDeNasc)

//EXIBINDO ANOS E IDADES

let anosVivido = anoAtual
let idadeAtual = 0

for (let anosVivido = anoDeNasc; anosVivido <= idadeAtual; anosVivido++) {
 console.log(anosVivido + " - " + idadeAtual + " anos de idade")
 idadeAtual++
}
//WHILE
continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while (continuar != "n" );
