let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.getElementById("msg")
const you=document.getElementById("You");
const comp=document.getElementById("comp")

const showwinner=(userwin)=>{
    if(userwin===true)
    {console.log("you win");
       msg.innerText="you won the match"
       msg.style.backgroundColor="green";
       you.innerText=userscore+1;
        userscore++;
    }
    else {
        msg.innerHTML="you lost the match"
        msg.style.backgroundColor="red";
        comp.innerText=compscore+1;
        compscore++;
    }


}

const drawgame=()=>{
    console.log("draw match")
    msg.innerHTML="match is draw"
    msg.style.backgroundColor="black";
    color=white;
}

const gencomputerchoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];

}

const playgame=(userchoice)=>{
    console.log("user chice is ->",userchoice)
    // generate comp choice
    const compchoice=gencomputerchoice();
    console.log("computer choice",compchoice)

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")   
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?true:false;
        }
        showwinner(userwin);
    }
    }
  

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        console.log("event was clicked",userchoice);
        playgame(userchoice);
    });
});
