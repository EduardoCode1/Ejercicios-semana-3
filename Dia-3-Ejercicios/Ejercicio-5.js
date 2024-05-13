const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mezclarColores(color1, color2) {
    if ((color1 === "azul" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "azul")) {
        return "verde";
    } else if ((color1 === "azul" && color2 === "rojo") || (color1 === "rojo" && color2 === "azul")) {
        return "morado";
    } else if ((color1 === "rojo" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "rojo")) {
        return "naranja";
    } else {
        return "Error: La combinación de colores ingresada no es válida.";
    }
}

function main() {
    try {
        rl.question("Ingresa el primer color (rojo, amarillo o azul):", (color1) => {
            rl.question("Ingresa el segundo color (rojo, amarillo o azul):", (color2) => {
                let resultado = mezclarColores(color1.toLowerCase(), color2.toLowerCase());
                console.log("El resultado de mezclar " + color1 + " y " + color2 + " es: " + resultado);
                rl.close();
            });
        });
    } catch (error) {
        console.log(error);
        rl.close();
    }
}

main();
