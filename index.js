const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(vitorias, derrotas) {

    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
    rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
        const resultado = calcular(parseInt(vitorias), parseInt(derrotas));
        console.log(resultado);
        rl.close();
    });
});