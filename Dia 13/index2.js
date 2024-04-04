//CRIANDO CLASS
class Carro {
    Nome
    Potecia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potecia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potecia = potecia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }
    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = [];
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes; index++) {
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) { 
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }
        return  this.Vencedor = vencedor
    }
    ExibirVencedor() {
        alert('O vencedor é: ' + this.Vencedor.Nome)
    }
}

//CRIANDO OBJETO
let corrida = new Corrida("GTR R35", "Corrida de rua ", 600000)


corrida.Participantes[0] = new Carro("Ferrari 458 ", 605, 200, 3)
corrida.Participantes[1] = new Carro("Lancer ", 170, 198, 10.7)
corrida.Participantes[2] = new Carro("Supra mk4 ", 330, 250, 5.1)

corrida.DefinirVencedor()
corrida.ExibirVencedor()