const http = require('http');

const servidor = http.createServer((req,resp)=>{
    resp.end('Hola Mundo')
});


const PUERTO=3000;

servidor.listen(PUERTO,()=>{
    console.log(`el servidor esta escuchando  ${PUERTO}`);
});