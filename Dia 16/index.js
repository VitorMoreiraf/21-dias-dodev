//Arrays para armazenar nomes e senhas
let nomes = [];
let senhas = [];

//Função para solicitar a opção ao usuário
function solicitarOpcao() {
    let opcao = prompt("Ecolha uma opção: \n1. Cadastrar \n2. Fazer Login" +
    " \n3. Excluir Cadastro \n4. Encerrar programa")
    return opcao
}
//Função para solicitar nome e senha ao usuário
function CadastrarUsuario() {
    nomes.push(prompt("Digite seu nome:"))
    senhas.push(prompt("Digite sua senha:"))
}
//Função para fazer login
function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome);
    if ( indice !== -1 && senhas[indice] == senha) {
       return true;
    } else {
        return false;
    }
}

//Função para excluir cadastro
function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluido com sucesso!")
    } else {
        console.log("Usuário não encontrado.")
    }
}

//Fluxo de funcinamento do programa
let continuar = true
while (continuar) {
    let opcao =  solicitarOpcao();

    switch (opcao) {
        case "1":
            CadastrarUsuario();
            break;
        case "2":
            let nome = prompt("Digite seu nome:")
            let senha = prompt("Digite seu senha:")
            let login = fazerLogin(nome, senha);
            if (login) {
                console.log("Login feito com sucesso!")
            } else {
                console.log("Nome ou senha incorreto.")
            }
            break;
        case "3":
            let nomes = prompt("Digite seu nome:")
            excluirCadastro(nomes);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção invalida. Tente novamente.")
            break;
    }
}








console.log()