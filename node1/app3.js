const http = require('http');

const servidor = http.createServer((req,resp)=>{
    console.log('El cliente realizo una peticion');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    resp.end('Fin del llamado')
});


const PUERTO=3000;
servidor.listen(PUERTO,()=>{
    console.log(`el servidor esta escuchando  ${PUERTO}`);
});