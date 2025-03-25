function obterTaxaDeCambio() {
    const taxaDeCambioFixa = 5.67; // 1 BRL = 5.67 USD
    return taxaDeCambioFixa;
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoConverter = document.querySelector('button');
    const inputReal = document.querySelector('.real-centralizado');
    const inputDolar = document.querySelector('.dolar-centralizado');

    // Quando o valor no campo de Real mudar
    inputReal.addEventListener('input', () => {
        // Se o campo de Real for apagado, limpa o campo de Dólar também
        if (inputReal.value === '') {
            inputDolar.value = '';
        }
    });

    botaoConverter.addEventListener('click', () => {
        const valorEmReais = parseFloat(inputReal.value);
        if (isNaN(valorEmReais) || valorEmReais <= 0) {
            alert('Por favor, insira um valor válido em reais.');
            return;
        }

        const taxaCambio = obterTaxaDeCambio(); // Obtém a taxa fixa de câmbio
        if (taxaCambio) {
            const valorEmDolares = valorEmReais * taxaCambio;

            // Exibe o valor convertido diretamente no campo de dólares
            inputDolar.value = valorEmDolares.toFixed(2);
        } else {
            alert('Não foi possível obter a taxa de câmbio. Tente novamente mais tarde.');
        }
    });
});
