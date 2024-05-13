const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nombreMes(numero) {
    switch (numero) {
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            return "Error: Ingresa un número válido de mes (entre 1 y 12).";
    }
}

function main() {
    try {
        rl.question("Ingresa el número del mes (1-12):", (numero) => {
            numero = parseInt(numero);

            if (isNaN(numero) || numero < 1 || numero > 12) {
                throw "Error: Ingresa un número válido de mes (entre 1 y 12).";
            }

            let nombre = nombreMes(numero);
            console.log("El mes correspondiente al número " + numero + " es: " + nombre);
            rl.close();
        });
    } catch (error) {
        console.log(error);
        rl.close();
    }
}

main();
