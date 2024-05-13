const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//-------------------------------------Ejercicio 1---------------------------------------------------
function ejercicio1() {
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
            rl.question("Ingresa un número:", (numero) => {
                numero = parseFloat(numero);
                if (isNaN(numero)) {
                    throw "Error: Ingresa un número válido.";
                }
                let signo = determinarSigno(numero);
                console.log("El número ingresado es " + signo);
                askToContinue();
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 2---------------------------------------------------

function ejercicio2() {
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
        try {
            rl.question("Ingresa el primer número:", (num1) => {
                rl.question("Ingresa el segundo número:", (num2) => {
                    rl.question("Ingresa el tercer número:", (num3) => {
                        num1 = parseFloat(num1);
                        num2 = parseFloat(num2);
                        num3 = parseFloat(num3);

                        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                            throw "Error: Ingresa tres números válidos.";
                        }

                        let resultado = calcularMayor(num1, num2, num3);
                        console.log("El mayor de los tres números es: " + resultado);
                        askToContinue();
                    });
                });
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 3---------------------------------------------------

function ejercicio3() {
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
        try {
            rl.question("Ingresa un número para calcular su factorial:", (num) => {
                num = parseInt(num);

                if (isNaN(num)) {
                    throw "Error: Ingresa un número válido.";
                }

                let resultado = factorial(num);
                console.log("El factorial de " + num + " es: " + resultado);
                askToContinue();
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 4---------------------------------------------------

function ejercicio4() {
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
                askToContinue();
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 5---------------------------------------------------

function ejercicio5() {
    function mezclarColores(color1, color2) {
        if (
            (color1 === "azul" && color2 === "amarillo") ||
            (color1 === "amarillo" && color2 === "azul")
        ) {
            return "verde";
        } else if (
            (color1 === "azul" && color2 === "rojo") ||
            (color1 === "rojo" && color2 === "azul")
        ) {
            return "morado";
        } else if (
            (color1 === "rojo" && color2 === "amarillo") ||
            (color1 === "amarillo" && color2 === "rojo")
        ) {
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
                    askToContinue();
                });
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 6---------------------------------------------------

function ejercicio6() {
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
                askToContinue();
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}
//-------------------------------------Ejercicio 7---------------------------------------------------

function ejercicio7() {
    function tipoVehiculo(categoria) {
        switch (categoria.toLowerCase()) {
            case "moto":
                return "Motocicleta";
            case "auto":
                return "Automóvil";
            case "camion":
                return "Camión";
            case "bicicleta":
                return "Bicicleta";
            default:
                return "Error: Ingresa una categoría válida de vehículo (Moto, Auto, Camion, Bicicleta).";
        }
    }

    function main() {
        try {
            rl.question("Ingresa la categoría del vehículo (Moto, Auto, Camion, Bicicleta):", (categoria) => {
                let tipo = tipoVehiculo(categoria);
                console.log("El tipo de vehículo correspondiente a la categoría " + categoria + " es: " + tipo);
                askToContinue();
            });
        } catch (error) {
            console.log(error);
            rl.close();
        }
    }

    main();
}

//-------------------------No entendi el ejeplo que me dio y mejor cree esta funcion mas sencilla :(---------------------------------------------------

function askToContinue() {
    rl.question("¿Desea ejecutar otro ejercicio? (S/N):", (respuesta) => {
        if (respuesta.trim().toLowerCase() === "s") {
            main();
        } else if (respuesta.trim().toLowerCase() === "n") {
            console.log("Saliendo del programa...");
            rl.close();
        } else {
            console.log("Respuesta no válida.");
            askToContinue();
        }
    });
}


//-------------------------------------Menú Principal---------------------------------------------------

function main() {
    console.log("MENU");
    console.log("1. Ejercicio 1");
    console.log("2. Ejercicio 2");
    console.log("3. Ejercicio 3");
    console.log("4. Ejercicio 4");
    console.log("5. Ejercicio 5");
    console.log("6. Ejercicio 6");
    console.log("7. Ejercicio 7");
    console.log("8. Salir");

    rl.question("Selecciona una opción:", (opcionSeleccionada) => {
        opcion = parseInt(opcionSeleccionada);

        switch (opcion) {
            case 1:
                console.log("Ejecutando Ejercicio 1:");
                ejercicio1();
                break;
            case 2:
                console.log("Ejecutando Ejercicio 2:");
                ejercicio2();
                break;
            case 3:
                console.log("Ejecutando Ejercicio 3:");
                ejercicio3();
                break;
            case 4:
                console.log("Ejecutando Ejercicio 4:");
                ejercicio4();
                break;
            case 5:
                console.log("Ejecutando Ejercicio 5:");
                ejercicio5();
                break;
            case 6:
                console.log("Ejecutando Ejercicio 6:");
                ejercicio6();
                break;
            case 7:
                console.log("Ejecutando Ejercicio 7:");
                ejercicio7();
                break;
            case 8:
                console.log("Saliendo del programa...");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, selecciona una opción válida.");
                main();
        }
    });
}

main();
