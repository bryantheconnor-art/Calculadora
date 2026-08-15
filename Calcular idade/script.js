
    function calcularIdade() {
        var anoNascimento = document.getElementById("anoNascimento").value;
        var anoAtual = new Date().getFullYear();
        var idade = anoAtual - anoNascimento;
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + " anos.";
    }