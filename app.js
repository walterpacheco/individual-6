// Importamos Yargs
const yargs = require('yargs');

// Configuración del comando "adulto"
yargs.command({
    command: 'adulto',
    describe: 'Evalúa si una persona es mayor de edad',
    builder: {
        edad: {
            describe: 'Edad de la persona',
            demandOption: true,  // Este argumento es obligatorio
            type: 'number'       // El tipo debe ser un número
        }
    },
    handler(argv) {
        // Lógica para evaluar si es mayor de edad
        if (argv.edad >= 18) {
            console.log('Mayor de edad');
        } else {
            console.log('Menor de edad');
        }
    }
});


// Necesario para que Yargs procese los argumentos
yargs.parse();
