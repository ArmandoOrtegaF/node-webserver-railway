const http = require('http');

//Req son todos los datos que me solicita el cliente.
//Resp son todos los datos que le voy a enviar al cliente.
http.createServer((req, res) =>{

    //res.writeHead(200, {'Content-Type': 'application/json'});

    res.write('Hello dude');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);