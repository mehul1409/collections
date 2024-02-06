// const Event = require('events');

// const event = new Event();

// event.on("mehul",()=>{
//     console.log("my name is mehul bansal");
// });

// event.emit("mehul");

const Event = require("events");

const event = new Event();

event.on("click",()=>{
    console.log("hii! i am mehul bansal");
});

event.emit("click");