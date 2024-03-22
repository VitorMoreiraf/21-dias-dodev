//CRIANDO VARIÁVEIS
let array = [];
let arrayInvertido = [];
let quantidade = parseInt(prompt("Digite a quantidade de números para inserir no array"))

for (let i = 0; i < quantidade; i++) {
    let numero = prompt("digite o "+ (i + 1) + "º número" )
    array[i] = numero;
    
}

console.log("Array original: " + array);

//INVERTINDO ARRAY
let contador = quantidade - 1;

for (let i = 0; i < quantidade; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido);
