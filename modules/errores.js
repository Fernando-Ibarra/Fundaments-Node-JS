// Sincrono
function otraFuncion() {
    ejemplo1();
}

function ejemplo1() {
    return 3 + z;
}

// Asincrona
function asincrona() {
    setTimeout(() => {
        return 3 + z;
    })
}
try {
    // No se rompa - sincrona
    otraFuncion();
    // Se rompe - asincrona
    asincrona();
} catch (error) {
    console.error(`Ha ocurrido un problema: ${error}`);
    console.error(error);
}

// No se rompe la aplicación
console.log('Al final');
