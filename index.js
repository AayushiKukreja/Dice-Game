var random1=Math.floor(Math.random()*6)+1 ;
var randomDice="dice"+random1+".png"
var randomDiceSrc="images/"+randomDice ;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSrc) ;
var random2=Math.floor(Math.random()*6)+1 ;
var random2Dicesrc="images/dice"+random2+".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random2Dicesrc) ;

if(random1 > random2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(random1==random2)
{
document.querySelector("h1").innerHTML="It's a Tie!"
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins!"
}
