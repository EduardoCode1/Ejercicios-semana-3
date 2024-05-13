const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMayor(num1, num2, num3) {
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    return mayor;
}

function main() {
    rl.question("Ingresa el primer número:", (num1) => {
        rl.question("Ingresa el segundo número:", (num2) => {
            rl.question("Ingresa el tercer número:", (num3) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                num3 = parseFloat(num3);

                if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                    console.log("Error: Ingresa tres números válidos.");
                    rl.close();
                    return;
                }

                if (num1 === num2 && num2 === num3) {
                    console.log("Error: No digitaste números diferentes.");
                    rl.close();
                    return;
                } else if (num1 === num2 || num2 === num3 || num1 === num3) {
                    console.log("Error: Tenemos dos números iguales.");
                    rl.close();
                    return;
                }

                let resultado = calcularMayor(num1, num2, num3);
                console.log("El mayor de los tres números es: " + resultado);
                rl.close();
            });
        });
    });
}

main();
