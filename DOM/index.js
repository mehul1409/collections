// let button = document.getElementById("btn");

// button.addEventListener('click',()=>{
//     console.log("Button Clicked Successfully!");
// });

// button.addEventListener('mouseover',()=>{
//     console.log("Mouse over  Successfully!");
// });

// button.addEventListener('mouseout',()=>{
//     console.log("Mouse Out");
// });

// function click1(){
//     console.log("Click1 activated");
// }

// function click2(){
//     console.log("click2 activated");
// }

// button.addEventListener('click',click1);
// button.addEventListener('click',click2);

// button.removeEventListener("click",click2);

// window.addEventListener('keydown',checkkey);

// function checkkey(key){
//     alert(`${key.key} is pressed!`);
// }

// window.addEventListener('wheel',function(event){
//     if(event.deltaY>0){
//         console.log("down scrolling.......");
//     }else if(event.deltaY<0){
//         console.log("up scrolling.....");
//     }else if(event.deltaX>0){
//         console.log("left scrolling.........");
//     }else if(event.deltaX<0){
//         console.log("right scrolling......");
//     }
// });

// let input = document.getElementById("text");

// input.addEventListener('focus',()=>{
//     input.style.background = "yellow";
// })
// input.addEventListener('blur',()=>{
//     input.style.background = "white";
// })
// input.addEventListener('change',()=>{
//     alert(this.value);
// })
// input.addEventListener('input',function(){
//     console.log(this.value);
// })


// let div = document.getElementById("container");
// let button = document.getElementById("btn");

// button.addEventListener('click',function(event){
//     console.log("button triggered........");
//     event.stopPropagation();
// });

// div.addEventListener('click',function(){
//     console.log("div triggered........")
// });

// document.body.addEventListener('click',function(){
//     console.log("body triggered........")
// });

// let anchor = document.getElementById("anchor");

// anchor.addEventListener('click',(event)=>{
//     console.log("linked clicked");
//     event.preventDefault();
// })


// let form = document.getElementById("form");

// form.addEventListener('submit',function(event){
//     event.preventDefault();
// })


// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.innerWidth);

// let btn = document.getElementById("btn1");

// btn.addEventListener('click', function(){
//     window.open('https://www.google.com','google',"height=800,width=500");
// });

// setTimeout(()=>{
//     alert("this is a set timeout function")
// },5000);