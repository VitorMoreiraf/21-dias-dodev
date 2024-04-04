//CRIANDO CLASS
class Computador {
    tipo 
    processador
    video
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    ExibindoInformacoes(){
        console.log("Tipo: " + this.tipo)
        console.log("Processador: " + this.processador)
        console.log("Video: " + this.video)
        console.log("Armazrnamento: " + this.armazenamento + "GB")
        console.log("Memória RAM: " + this.memoriaRam + "GB")
        console.log("SSD: " + this.ssd)
    }
}

//CRIANDO OBJETO 
let meuComputador = new Computador("Notebook", "CORE I3", "Integrado", 1000, 4, true);
meuComputador.ExibindoInformacoes();