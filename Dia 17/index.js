//Criando Class
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor (id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel 
    DiaEntrada
    DiaSaida
    constructor (id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

//Criando arrays
let hoteis = [];
let reservas = [];
let idHotel = 1
let idReserva = 1

//Função para cadastrar hotel
function CadastarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = Number(prompt("Digite o número do hotel"))
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++
    hoteis.push(hotel)
}
//Função para cadastrar reserva
function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for(let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("id de hotel não encontrado")
            }
        }
    } while (!existe)
    
    let nome = prompt("digite o nome do responsável")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let diaSaida
    do { 
       diaSaida = parseInt(prompt("Digite o dia de saída"))
       if(diaSaida < diaEntrada) {
        console.log("o dia de saída deve ser maior que o dia de entrada")
       }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reserva.push(reserva)
}

//FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.idHotel) {
            let i = idHotel - 1
            console.log("hotel:", hoteis[i].Nome)
            console.log("responsável:", reserva.Responsavel)
            console.log("Dia de entrada", reserva.DiaEntrada)
            console.log("Dia de saída", reserva.DiaSaida)
        }
    })
}

//FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].idHotel
    console.log("hotel:", hoteis[idHotel - 1].IdHotel)
    console.log("endereço:", hoteis[idHotel - 1].endereco)
    console.log("dia de entrada:", reservas[idReserva - 1].DiaEntrada)
    console.log("dia de saída:", reservas[idReserva - 1].DiaSaida)
}

//FUNÇÃO PARA RESERVA PELO RESPONSÁVEL
function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].Responsavel) {
            console.log("id da Reserva: " + reservas[i].Id )
            console.log("hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
        
    }
}

//FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurado = []
    for (let i = 0; i < hoteis.length; i++)
    if (categoria == hoteis[i].Categoria) {
        hoteisProcurado.push(hoteis[i].Nome)
    }
    return hoteisProcurado
}

//FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL 
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de telefone atualizado!")
}

//FLUXO DE FUNCIONAMENTO
let continuar = true
do {
    let opcao = prompt("escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
"\n4 - procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 procurar hóteis por categotia" +
"\n7 - Atualizar telefone de um hotel \n8 - encerrar o  programa")

switch (opcao) {
    case "1":
        CadastarHotel()
        break;
    case "2":
        CadastrarReserva()
        break;
    case "3":
        ProcurarReservasPeloHotel(prompt("Digite o id do hotel"))
        break;
    case "4":
        ProcurarHotelPelaReserva(prompt("Difite o id da reserva"))
        break;
    case "5":
        ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"))
        break;
    case "6":
        let hoteisProcurado = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
        console.log(hoteisProcurado)
        break;
    case "7":
        let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
        let telefone = prompt("digite o novo telefone")
        AtualizarTelefone(idHotel, telefone)
        break;
        case "8":
        console.log("Programa encerrado")
        continuar = false
        break;
    default:
        console.log("Opção não inválida")
        break;
}
} while (continuar);