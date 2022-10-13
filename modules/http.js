const http = require('http');

// http.createServer(funcion(request, response))
http.createServer(router).listen(3000);

function router(request, response) {
    console.log('Nueva Petición!');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.writeHead(201,{ 'Content-Type':'text/plain' });
            response.write('Hola, qué tal?');
            response.end();
            break;
    
        default:
            response.writeHead(201,{ 'Content-Type':'text/plain; charset:utf-8' });
            response.write('Error 404: No se lo que quieres');
            response.end();
            break;
    }
}

console.log('Escuchando http en el puerto 3000');