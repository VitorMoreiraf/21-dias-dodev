let nomeDoUsuario = prompt('Insira seu nome');
let idadeDoUsuario = parseInt(prompt('Insira sua idade'));
let anoDeNascimento = parseInt(2023 - idadeDoUsuario);
let alturaDoUsuario = parseFloat(prompt('Insira sua altura'));
let peso = prompt('Insira seu peso');
let pesoDoUsuario = Number(peso);

IMC = pesoDoUsuario / (alturaDoUsuario **2);
let IMCDoUsuario = IMC.toFixed(2);

console.log('Olá '+ nomeDoUsuario + ', você tem ' + idadeDoUsuario +' anos, nasceu em ' + anoDeNascimento + 
', tem ' + alturaDoUsuario +' de altura, pesa ' +  pesoDoUsuario + 'kg seu IMC é ' + IMCDoUsuario + ' Kg/m2.');  