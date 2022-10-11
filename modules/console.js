// Imprimir 

// Cualquier valor 
console.log('Hola mundo');

// Información
console.info('Información');

// error
console.error('Error')

// precaución
console.warn('Precaución')

// tabla
var tabla = [ { a: 1, b: 'Z' }, { a: 2, b: 'M' } ];
console.table(tabla);

// group
console.group('Conversación:');
console.log('Hola');
console.log('BLA BLA BLA');
console.log('Adios');
console.groupEnd('Conversación:')

// Contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

// Ejemplo
function function1() {
    console.group('Funcion 1:');
    console.log('Esto es de la función 1');
    console.log('Esto también');
    function2();
    console.log('He vuelto a la 1');
    console.groupEnd('Funcion 1:');
}

function function2() {
    console.group('Funcion 2:');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('Funcion 2:');
}

console.log('Empezamos');
function1();
