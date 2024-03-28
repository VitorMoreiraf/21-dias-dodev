let nomes = []
let senhas = []
let contador = 0;

let continuar = true

while (continuar) {
    //Passo 2 e 3: solicitando qual operaçao o usuario deseja fazer e organizando
    //   a exercução do código com um switchCase dentro de um while
    let opcao = prompt("O que deseja fazer? 1 - cadastro / 2 - login / 3 - excluir / 4 - encerrar")

   switch (opcao) {
    case "1":
        //Passo 4: Criando um cadastro de usuario
        nomes[contador] = prompt("Digite seu nome de usuário:")
        senhas[contador] = prompt("Digite a senha.")
        contador++

        console.log("Cadastro realizado com sucesso.")
        break;
    case "2":
    //Passo 5: Criando lógica de login
        let nome = prompt("Digite seu nome de usuário:")
        let senha = prompt("Digite sua senha:")
        let loginValido = false

        for (let i = 0; i < nomes.length; i++) { 
        if (nome === nomes[i] && senha === senhas[i]) {
            loginValido = true
        }
    } 
        if (loginValido) { 
        alert("Login feito com sucesso. Bem-vindo!");
        } else {
          alert("Nome do usuário ou senha incorretos.");
        }
        
        break;
    case "3":
        //Passo 6: Criando Excluir
        let nomeExcluir = prompt("Qual nome deseja excluir?")
        let nomesAux = []
        let senhasAux = []
        let contadorAux = []

        for (let i = 0; i < contador; i++) {
            if (nomeExcluir == nomes[i]) {
                alert("Cadastro excluido com sucesso.")
            } else {
                nomesAux[contadorAux] == nomes[i]
                senhasAux[contadorAux] == senhas[i]
                contadorAux++
            }

        }
        nomes = nomesAux
        senhas = senhasAux
        contador--

        break;
    case "4":
        //Passo 7: Encerrando a exercurção do código
        continuar = false
        break;
    default:
        console.log("Opçao invalida, escolha outra!")
        break;
}
}