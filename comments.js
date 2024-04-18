//crie um servidor web
const http = require('http');
const fs = require('fs');
const path = require('path');

//crie um servidor web
http.createServer((req, res) => {
    //leia o arquivo comments.json
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal server error' }));
            return;
        }

        //escreva o conteúdo do arquivo na resposta
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//execute o servidor e acesse http://localhost:3000 no navegador

// Path: index.js
//crie um servidor web
const http = require('http');
const fs = require('fs');
const path = require('path');

//crie um servidor web
http.createServer((req, res) => {
    //leia o arquivo index.html
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal server error</h1>');
            return;
        }

        //escreva o conteúdo do arquivo na resposta
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//execute o servidor e acesse http://localhost:3000 no navegador

// Path: index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comments</title>
</head>

<body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script src="index.js"></script>
</