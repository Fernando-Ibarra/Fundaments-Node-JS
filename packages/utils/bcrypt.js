const bcrypt = require('bcrypt');

const password = 'Fs56_15monday';

// hash(contraseña, rondas para crear hash, function(error, hash))
// compare(contraseña, hash, function(error, result))
bcrypt.hash(password, 5, (error, hash) =>{
    console.log(hash);


    bcrypt.compare(password, hash, (error, result) =>{
        console.error(`Tenemos un error: ${error}`);
        console.info(`El resultado es: ${result}`);
    })
});

