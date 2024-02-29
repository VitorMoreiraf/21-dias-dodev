//CRIANDO VARIÁVEIS
let valor
let quantidade
let opcao = prompt("Bem vindo ao DoDev-thru, você deseja:" + 
"\n 1: - Abastecer com gasolina \n 2: - Abastecer com álcool \n 3: - Calibrar os pneus")

switch (opcao) {
    case "1":
    valor = parseInt(prompt("Digite o valor desejado para abastecer"))
    quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + " L de gasolina.")
        break;
    case "2":
    valor = parseInt(prompt("Digite o valor desejado para abastecer"))
    quantidade = valor / 3
        console.log("foram abastecidos " + quantidade + " L de alcool.")
        break;
    default:
        console.log("Pneus calibrados com sucesso.")
        break;
}