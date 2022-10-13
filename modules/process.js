process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');
});

process.on('uncaughtException', (error, origin) => {
    console.log('Se nos olvido capturar un error');
    console.error(error);
});
