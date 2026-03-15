let countcsk=document.getElementById("count-1")
let countrcb=document.getElementById("count-2") 
let winner=document.getElementById("winner")
let run1=0  
let run2=0
function onerun1(){
    run1=run1+1
    countcsk.innerText=run1
}
function fourrun1(){
    run1=run1+4
    countcsk.innerText=run1
}
function sixrun1(){
    run1=run1+6
    countcsk.innerText=run1
}

function onerun2(){
    run2=run2+1
    countrcb.innerText=run2
}
function fourrun2(){
    run2=run2+4
    countrcb.innerText=run2
}
function sixrun2(){
    run2=run2+6
    countrcb.innerText=run2
}
function showwinner(){
if(run1>run2){
    winner.innerText="CSK is winner"
}
else if(run2>run1){
    winner.innerText="RCB is winner"
}
else{
    winner.innerText="Match Draw"
}
}
