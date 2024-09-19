const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'faturamento.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const jsonData = JSON.parse(data);
    const faturamento = jsonData.map(item => item.valor);

    if (faturamento.length === 0) return;

    const menorValor = Math.min(...faturamento);
    const maiorValor = Math.max(...faturamento);

    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const mediaMensal = diasComFaturamento.length > 0
        ? diasComFaturamento.reduce((a, b) => a + b) / diasComFaturamento.length
        : 0;

    const diasAcimaMedia = faturamento.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
});
