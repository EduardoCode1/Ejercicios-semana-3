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