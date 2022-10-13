const os = require('os');

// Arquitectura
console.log(os.arch());

// plataforma - sistema operativo
console.log(os.platform());

// nucleos
console.log(os.cpus().length);
console.table(os.cpus());

// errores
console.log(os.constants);

// memoriaa libre en bites
console.log(os.freemem());

const SIZE = 1024;
function kb(bytes){ return bytes/SIZE }
function mb(bytes){ return kb(bytes)/SIZE }
function gb(bytes){ return mb(bytes)/SIZE }
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));

// directorio raiz
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());