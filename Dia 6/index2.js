//CRIANDO VÁRIAVEIS
let tabuada = Number(prompt("Escolha a tabuada que deseja, te devolverei ela e as duas próximas."))

    console.log("Aqui está a sua tabuada " + tabuada + " e as duas próximas.");

let ultimaTabuada = tabuada +2
//CRIANDO LOOP FOR
 
for(tabuada = tabuada; tabuada <=ultimaTabuada; tabuada++){  

for(contador = 0; contador <=10; contador++){
    console.log(tabuada + " x " + contador + " = " + tabuada*contador)
}
}