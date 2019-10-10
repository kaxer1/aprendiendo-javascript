/*
------- como funciona en nodejs ----------
const http = require('http');

const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>HOLA MUNDO</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Server on port 3000'.grey);
});
*/

// -------- con framework express -----
const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola mundo con express y nodejs</h1>');
    res.end();
})

server.listen(3000, function (){
    console.log('Server port 3000'.red);
})
/*
---------- codigo leer archivo --------
const fs = require('fs');
fs.readFile('./text.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString()); //convertir los datos en String
});
*/

/*
--------- codigo crear archivos -----------
const fs = require('fs');
fs.writeFile('./text.txt', 'linea uno', function (err) {
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});
console.log('Ultima linea de codigo');
*/


/*
const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
*/
