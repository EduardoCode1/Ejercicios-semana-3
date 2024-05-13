function determinarSigno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

function main() {
    try {
        let numero = parseFloat(prompt("Ingresa un número:"));
        if (isNaN(numero)) {
            throw "Error: Ingresa un número válido.";
        }
        let signo = determinarSigno(numero);
        console.log("El número ingresado es " + signo);
    } catch (error) {
        console.log(error);
    }
}

main();
