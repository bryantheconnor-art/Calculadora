
function calcular(operacao) {
    // Pega os valores dos dois campos
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    // Valida se os campos estão preenchidos
    if (document.getElementById("numero1").value === "" || document.getElementById("numero2").value === "") {
        document.getElementById("resultado").textContent = "Preencha ambos os campos!";
        return;
    }

    let resultado;

    // Escolhe a operação
    if (operacao === "+") {
        resultado = numero1 + numero2;
    } 
    else if (operacao === "-") {
        resultado = numero1 - numero2;
    } 
    else if (operacao === "*") {
        resultado = numero1 * numero2;
    } 
    else if (operacao === "/") {
        if (numero2 === 0) {
            document.getElementById("resultado").textContent = "Não é possível dividir por 0";
            return;
        }
        resultado = numero1 / numero2;
    }

    // Formata o resultado para até 2 casas decimais
    resultado = Math.round(resultado * 100) / 100;

    // Mostra o resultado na tela
    document.getElementById("resultado").textContent = resultado;
}

function limpar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").textContent = "Resultado";
}