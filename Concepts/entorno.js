let nombre = process.env.NOMBRE || 'SinNombre';
let web = process.env.WEB || 'No tienes web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es: ${web}`);