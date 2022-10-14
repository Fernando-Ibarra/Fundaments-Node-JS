let buffer = Buffer.alloc(4);
let buffer2 = Buffer.from([1, 2, 3, 5]);
let buffer3 = Buffer.from('Hola Mundo')

console.log(buffer);
console.table(buffer);

console.log(buffer2);
console.table(buffer2);

console.log(buffer3);
console.table(buffer3);


// -------------------------
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());