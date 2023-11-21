let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});
function Gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random() * 3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
   /* console.log( randidx);
    console.log(randColor);
    console.log(randbtn);
    */
    gameseq.push(randColor);
    console.log(gameseq);
    Gameflash(randbtn);
}
function checkAns(idx){
    console.log("current level");
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML=`Game OVER! <b>your score was ${level} </b>  <br> PRESS ANY KEY TO START`;
        let x=document.querySelectorAll(".btn");
        for(i of x){
            i.classList.add("special");
        }
        setTimeout(function(){
            let x=document.querySelectorAll(".btn");
            for(i of x){
                i.classList.remove("special");
            }
        },2000);
        resetTo();
    }
}
function btnpress(){
    let btn=this;
    userFlash(this);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);
    userFlash(btn);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function resetTo(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;

}