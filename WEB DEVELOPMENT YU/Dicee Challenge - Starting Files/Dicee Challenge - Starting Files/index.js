var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomimage1 = "/WEB DEVELOPMENT/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files//images/dice"+randomnumber1+".png"; 

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);   

var number2 = Math.floor(Math.random()*6)+1;

var randomimage2 = "/WEB DEVELOPMENT/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files//images/dice"+number2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomimage1 > randomimage2)
{
    document.querySelector("h1").innerHTML=" 🏆PLAYER 1 WINS";
}else if(randomimage1 < randomimage2)
{
    document.querySelector("h1").innerHTML=" 🏆PLAYER 2 WINS";
}else
{
    document.querySelector("h1").innerHTML="DRAW";
}
