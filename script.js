function iniciarDigitacao() {
    var texto = "Marcelin Cabral!"; // Texto que será digitado
    var elemento = document.getElementById('texto-digitado');
    var intervalo = 100; // Intervalo entre cada caractere digitado em milissegundos

    function adicionarCaractere(i) {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            setTimeout(function() {
                adicionarCaractere(i + 1);
            }, intervalo);
        } else {
            // Reinicia a animação
            setTimeout(function() {
                elemento.textContent = ''; // Limpa o texto
                adicionarCaractere(0); // Inicia a digitação novamente
            }, 1000); // Tempo de espera antes de reiniciar a animação (1 segundo neste caso)
        }
    }

    // Inicia a digitação do texto
    adicionarCaractere(0);
}

// Inicia o efeito de digitação quando a página carregar
window.onload = function() {
    iniciarDigitacao();
};

