const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPar(numero) {
    return numero % 2 === 0;
}

function main() {
    try {
        rl.question("Ingresa un número para determinar si es par o impar:", (num) => {
            num = parseInt(num);

            if (isNaN(num)) {
                throw "Error: Ingresa un número válido.";
            }

            if (esPar(num)) {
                console.log(num + " es un número par.");
            } else {
                console.log(num + " es un número impar.");
            }
            rl.close();
        });
    } catch (error) {
        console.log(error);
        rl.close();
    }
}

main();
