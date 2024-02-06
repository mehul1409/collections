// const express = require("express");
// const bodyparser = require("body-parser");

// const server = express();
// server.use(bodyparser.urlencoded({extended:true}));

// server.get("/",(req,res)=>{
//     res.send("welcome to my home page");
// });

// server.get("/about",(req,res)=>{
//     res.send("welcome to my about page");
// });

// server.get("/contactus",(req,res)=>{
//     res.send("welcome to my contact us page");
// });

// server.get("/calculator",function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });

// server.post("/calculator",(req,res)=>{
//     // res.send("hii");
//     // console.log(req.body);

//     let n1 = Number(req.body.v1);
//     let n2 = Number(req.body.v2);

//     let sum = n1+n2;
//     res.send(`sum of two digit is ${sum}`);
// });

// server.listen(3000 , (req,res)=>{
//     console.log("server running");
// });


const express = require("express");

const server = express();

server.get("/",(req,res)=>{
    res.send("hii this your home page");
});

server.get("/contact",(req,res)=>{
    res.send("hii this is our contact details");
});

server.listen(8080,function(req,res){
    console.log("hii this is mehul bansal");
});