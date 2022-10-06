function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Fernando', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso...');
    });
});