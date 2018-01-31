var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";}
else{
computerChoice = "scissors";}
var compare = function(choic1,choic2){
 if(choic1===choic2){
  return "The result is a tie!";}
    if(choic1==="rock"){
  if(choic2==="scissors"){
  return "rock wins"; }
     else{
 return "paper wins";
        } }
if(choic1==="paper"){
  if(choic2==="rock"){
 return "paper wins";  }
else{
  return "scissors wins";
  } }
 if(choic1==="scissors"){
 if(choic2==="rock"){
 return "rock wins"; }
else{
 return "scissors wins"; }}
};
compare(userChoice,computerChoice);


































