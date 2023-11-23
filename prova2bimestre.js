function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

var contador = 0;
var somaIMC = 0;
var terminar = false;
var maiorIMC = 0;
while (!terminar) {
    contador++;

    var peso = parseFloat(prompt(`Digite o seu peso: `));
    var altura = parseFloat(prompt(`Digite sua altura:`));

    var imc = calcularIMC(peso, altura);
    if (imc > maiorIMC) {
        maiorIMC = imc;
        var usuario = contador;
    }


    var classe = classificarIMC(imc)
    console.log(`Usuario ${contador}:`)
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classe}`);
    console.log("\n");

    somaIMC += imc;
    var continuar = prompt(`Deseja continuar? s / n`).toUpperCase();

    if (continuar === 'N') {
        terminar = true;
    } else if (continuar === 'S') {
        terminar = false;
    } else {
        alert("Opção inválida. O programa será encerrado.");
        terminar = true;
    }


}
alert(`Quantidade de usuários coletados: ${contador}\n
Usuário que apresentou o maior IMC: Usuario ${usuario} : ${maiorIMC.toFixed(2)}\n
A média dos IMCs calculados é: ${(somaIMC / contador).toFixed(2)}`);
