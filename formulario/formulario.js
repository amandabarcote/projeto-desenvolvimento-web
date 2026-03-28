function Enviar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var dataNascimento = document.getElementById("dataNascimento");

    var ok = true; // Variável para controlar se a validação foi bem-sucedida

    // Verifica se o nome foi preenchido corretamente
    if (nome.value != "" && nome.value.indexOf(" ") != -1) {
        // Verifica se o e-mail é válido
        if (email.value.indexOf("@") != -1) {
            // Verifica a data de nascimento
            var data = new Date(dataNascimento.value);
            var anoNascimento = data.getFullYear();

            // Valida se o ano de nascimento é antes de 1930
            if (anoNascimento < 1924) {
                alert("Insira uma data de nascimento válida.");
                ok = false; // Impede o envio se a data for inválida
            } else {
                alert(nome.value + ", muito obrigada pelo feedback!"); // Mensagem de agradecimento
            }
        } else {
            alert("Digite um e-mail válido");
            ok = false; // Impede o envio se o e-mail for inválido
        }
    } else {
        alert("Preencha o seu nome completo");
        ok = false; // Impede o envio se o nome não for válido
    }

    // Se tudo estiver correto, redireciona para a página inicial
    if (ok) {
        window.location.href = "https://amandabarcote.github.io/trabalho.Desenvolvimento.Web/";
    }

    return ok; // Retorna false para evitar o envio do formulário se houver erros
}
