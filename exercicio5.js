const stringOriginal = 'exemplo';

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringInvertida = inverterString(stringOriginal);

console.log('String original:', stringOriginal);
console.log('String invertida:', stringInvertida);
