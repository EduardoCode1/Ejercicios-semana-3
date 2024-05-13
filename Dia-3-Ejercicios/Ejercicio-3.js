const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function main() {
    rl.question("Ingresa un número para calcular su factorial:", (num) => {
        num = parseInt(num);

        if (isNaN(num)) {
            console.log("Error: Ingresa un número válido.");
            rl.close();
            return;
        }

        let resultado = factorial(num);
        console.log("El factorial de " + num + " es: " + resultado);
        rl.close();
    });

    rl.on('close', () => {
        console.log('Saliendo del programa...');
        process.exit(0); 
    });
}

main();
