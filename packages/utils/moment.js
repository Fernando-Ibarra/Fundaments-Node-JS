const moment = require('moment');

const ahora = moment();

console.info(ahora.toString());
console.log(ahora.format('DD/MM/YYYY - HH:MM:SS'));