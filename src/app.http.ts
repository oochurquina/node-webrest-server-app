import fs from 'fs';
import http from 'http';
const server = http.createServer((req,res)=>{
    console.log(req.url)
    // if (req.url==='/'){
    //     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //     res.write('<h1>Introducción a WebServer</h1>')
    // // }
    // res.write(`<h2>${req.url}</h2>`);
    // res.end();
    // const data = {
    //     name: 'omar',
    //     age: 44,
    //     city: 'punta alta'
    // }

    // res.writeHead(200,{'Content-Type':'application/json'});
    // res.end(JSON.stringify(data))
    if (req.url==='/'){
        const htmlfile=fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(htmlfile);
        return;
    }
    if (req.url?.endsWith('.js')){
        res.writeHead(200,{'Content-Type':'application/javascript'});
    } else if (req.url?.endsWith('.css')){
        res.writeHead(200,{'Content-Type': 'text/css'});
    }
    const responseContent= fs.readFileSync(`./public${req.url}`,'utf-8')
    res.end(responseContent);
})

server.listen(8080,()=>{
    console.log('Server running on port 8080')
})