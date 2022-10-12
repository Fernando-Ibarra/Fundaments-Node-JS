// Ejecuta un comando en la consola
const { exec, spawn } = require('child_process');


exec('node modules/console.js', (error, stdout, sterr) => {
    if (error) {
        console.error(error);
        return false;
    }

    console.log(stdout);
});

const proceso = spawn('cmd.exe', ['/c', 'dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', () => {
    console.log('Proceso terminado.');
    console.log(proceso.killed);
})