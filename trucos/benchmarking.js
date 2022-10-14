console.time('todo')
let suma = 0;

console.time('Bluce')
for (let i = 0; i < 1000000000; i++) {
    suma += 1;   
}
console.timeEnd('Bluce')

let suma2 = 0;

console.time('Bluce 2')
for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;   
}
console.timeEnd('Bluce 2')

console.time('Asincrono')
asincrona()
    .then(() => {
        console.timeEnd('Asincrono')
    })

console.timeEnd('todo')

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termino el proceso');
            resolve();
        });
    })
}