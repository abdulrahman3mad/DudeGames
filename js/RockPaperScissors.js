let player1=document.querySelector(".player1 img");
let player2=document.querySelector(".player2 img");
let goIcon=document.querySelector(".start");
let dude1won=document.querySelector(".fwon");
let dude2won=document.querySelector(".swon");
let drawGame=document.querySelector(".draw");

let imgNum=0,imgNum2=0;

// 0--> paper
// 1-->rock
// 2-->scissors

goIcon.onclick=function(){
    dude1won.style.display="none";
    dude2won.style.display="none";
    drawGame.style.display="none";
    imgNum1=Math.floor(Math.random()*3);
    player1.setAttribute("src","images/"+imgNum1+".png");
    imgNum2=Math.floor(Math.random()*3);
    player2.setAttribute("src","images/"+imgNum2+".png");
    theWinner();
}

function theWinner(){

    if(imgNum1==imgNum2){
     drawGame.style.display="block";
    }

    else if(imgNum1+imgNum2==1||imgNum1+imgNum2==3){
        if(imgNum1<imgNum2){
            dude1won.style.display="block";
            
        }
        else{
            dude2won.style.display="block";
        }
    }
    else if(imgNum1+imgNum2==2){
        if(imgNum1>imgNum2)
        dude1won.style.display="block";
        else{
            dude2won.style.display="block";
        }
    }
}

  