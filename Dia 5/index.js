//CRIANDO VARIÁVEIS
let num1 = parseInt(prompt("Dígite o primeiro número"));
let num2 = parseInt(prompt("Dígite o segundo número"));
let opecao = parseInt(prompt("Escolha a operação que deseja realizar:"
+"\n1 = +; \n2 = -; \n3 = *; \n4 = /"));

//CRIANDO SWITCHCASE
switch (opecao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
}