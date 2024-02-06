// const lib = require("./lib.js");
//import {diff} from './lib.js';        //export module via import generally use in mjs
// const fs = require("fs");
// const express = require("express");

// console.log(lib.sum(4,5));

// console.log(diff(4,2));

//synchronous read file

// const txt = fs.readFileSync("demo.txt","utf-8");
// const txt = fs.readFileSync("demo.txt");
// newtxt = txt.toString();
// console.log(newtxt);

//asynchronous read file

// fs.readFile("demo.txt","utf-8",(error,txt)=>{
//     console.log(txt);
// });


//creating server by nodejs


// const http = require("http");
// const fs = require("fs");

// const index = fs.readFileSync("./index.html", "utf-8");
// const data = fs.readFileSync("./data.json", "utf-8");

// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     switch (req.url) {
//         case '/demo':
//             res.setHeader("Content-Type", "text/html");
//             res.end(index);
//             break;

//         case '/api':
//             res.setHeader("Content-Type", "application/json");
//             res.end(data);
//             break;
//         default :
//             res.writeHead(404);
//             res.end();
//             break;

//     }
//     console.log("server started successfully");
// })
// server.listen(8080);


//creating server by express

// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;


const express = require("express");
const server = express();
const morgan = require('morgan');
const productrouter = require('./routes/product')
const userrouter = require('./routes/users')


// server.use((req,res,next)=>{
//     console.log(req.method,res.ip,res.hostname);
//     next()
// })

//bodyparser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products',productrouter.router);
server.use('/users',userrouter.router);


server.listen(8080, () => {
    console.log('server started');
});

