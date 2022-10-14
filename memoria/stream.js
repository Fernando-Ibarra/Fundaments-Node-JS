const fs = require('fs');
const stream = require('stream');

let data = '';

// ------------------------------
// Stream Lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8')
// Archivos pequeños
readableStream.on('data', (chunk) => {
    console.log(chunk);
})


// Archivos pesado pesados
readableStream.on('data', (chunk) => {
    data += chunk;
})

readableStream.off('end', () => {
    console.log(1);
    console.log(data);
})
