// const fs = require("fs");


                                    //synchronous form 


// fs.mkdirSync("mehul bansal");

// fs.writeFileSync("mehul1/bio.txt","hii i am mehul bansal");

// fs.appendFileSync("mehul1/bio.txt"," currently i am in jaypee institute of information technology");

// const data = fs.readFileSync("mehul1/bio.txt")

// new_data = data.toString();


// console.log(new_data);


// fs.renameSync("mehul1/bio.txt","mehul1/mybio.txt");

// fs.unlinkSync("mehul1/mybio.txt");

// fs.rmdirSync("mehul1");


                                    //asynchronous form 


// const fs = require.log("fs");


// fs.mkdir("mehul1",(err)=>{
//     console.log("folder created successfully");
// });

// fs.writeFile("mehul1/bio.txt","hii this is mehul bansal",(err)=>{
//     console.log("file created successfully");
// });

// fs.appendFile("mehul1/bio.txt","currently i am in jaypee institute of iformation technology",(err)=>{
//     console.log("data appended successfully");
// });

// fs.readFile("mehul1/bio.txt","UTF-8",(err,data)=>{
//     console.log(data);
//     console.log("data retrieved successfully");
// });

// fs.rename("mehul1/bio.txt","mehul1/mybio.txt",(err)=>{
//     console.log("renamed successfully");
// });

// fs.unlink("mehul1/mybio.txt",(err)=>{
//     console.log("file deleted");
// });

// fs.rmdir("mehul1",(err)=>{
//     console.log("folder deleted successsgully");
// });