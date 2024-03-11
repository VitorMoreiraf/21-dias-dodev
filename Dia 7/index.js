//CRIANDO VARIÁVEIS ( DoDev school While)
let mediaGeral = 0
let qtdDeHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//nota,sexo

while(contador <= 10) {
    nota =  parseInt(prompt("Digite a nota " + contador + " º aluno"))
    sexo = prompt("Digite seu sexo (m/f)")

    if(sexo == "m"){
        if(nota > maiorNotaHomens){ 
      maiorNotaHomens = nota
    }
    qtdDeHomens++
    }
    if(sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++
    }
    mediaGeral += nota
    contador++
    }

    mediaGeral = mediaGeral / 10

    
    console.log("A média geral dos alunos foi: " + mediaGeral)
    console.log("A quantidade de homens cadastrados foi: " + qtdDeHomens)
    console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7)
    console.log("A maior notas entre os homens foi: " + maiorNotaHomens)