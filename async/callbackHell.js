function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
       console.log('Bla bla bla bla...');
       callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós ${nombre}`);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback)
    }
    
}

// -------------------------------------
// Callback Hell
/*hola('Fernando', (nombre) => {
    hablar(() => {
        hablar(() => {
            hablar(() => {
                adios(nombre, () => {
                    console.log('Terminando proceso...');
                });
            });
        });
    });
});*/

// -------------------------------------
// Better Callback 
console.log('Iniciando proceso...');
hola('Fernando', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado...');
    });
})