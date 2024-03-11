//Caixa eletrônico DoDev (DOWHILE)

let saldo = 1000; //Inicializamos o saldo com valor inicial
let maiorValorInserido = 0;
let somaDosValoresInseridos = 0;
let totalDeTransacoes = 0;
let continuar = false

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digitr seu cpf:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D")

    if(valor < 0) { 
    console.log("Valor inválido. Transação invalida.")
    } else if (operacao == "S" && valor > saldo){
        console.log("Valor insuficiente. a transação não foi realizada.")
    } else if (operacao == "S") {
        console.log("Olá, " + nome + " do cpf " + cpf + ", seu saldo atual é R$ " + saldo);
        saldo -= valor;
        totalDeTransacoes++;
        somaDosValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realiazada com sucesso. seu saldo atual é R$ " + saldo);
    } else {
        console.log("Olá, " + nome + " e cpf " + cpf + ", seu saldo atual é R$ " + saldo);
        saldo += valor;
        totalDeTransacoes++;
        somaDosValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. seu saldo atual é R$ " + saldo);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar 2 para parar):")
    if ( opcao === "1") {
        continuar = true
    } else if ( opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false
    }

} while (continuar)

console.log("Saldo final: R$ " + saldo);
console.log("Maior valor inserido: R$ " + maiorValorInserido);
console.log("Média dos valores inseridos: R$ " + somaDosValoresInseridos / totalDeTransacoes);