const fs = require("fs");

const biodata = {
    name : "mehul bansal",
    age : 19,
    channel: "thapa technical"    
};

const jsondata = JSON.stringify(biodata);

// fs.writeFileSync("json1.json",jsondata);
// fs.appendFileSync("json1.json",jsondata);

// fs.writeFile("json1.json",jsondata,(err)=>{
//     console.log("file created");
// });

// fs.appendFile("json1.json",jsondata,(err)=>{
//     console.log("append successfully");
// });

fs.readFile("json1.json","utf-8",(err,res)=>{
    const orgdata = JSON.parse(res);
    console.log(orgdata);
});

