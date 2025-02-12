let Cscore=0;
let Uscore=0;

let message=document.querySelector("#msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
//console.log(choices);
let genCompChoice=()=>{
    let options=["Rock", "Paper","Scissors"];
    let ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];
};

let drawGame=()=>{
    console.log("GAME WAS DRAW");
    message.innerText="GAME IS DRAW";
    message.style.backgroundColor="red";
}

let showWinner=(userWin,  userChoice, compChoice)=>{
if(userWin){
    console.log("YOU WON THE GAME");
    message.innerText=` YOU WON AND ${userChoice} Beats ${compChoice}`;
    message.style.backgroundColor="blue";
    Uscore++;
    userScore.innerText=Uscore;

}
else{
    console.log("COMPUTER WON THE GAME");
    message.innerText=` COMPUTER WON AND ${compChoice} Beats ${userChoice}`;
    message.style.backgroundColor="green";
    Cscore++;
    compScore.innerText=Cscore;
}
}









let playGame=(userChoice)=>{
    console.log("user choice :", userChoice);
    let compChoice=genCompChoice();
    console.log("Computer choice :",compChoice);

    if(userChoice===compChoice){
        //Draw
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"? false: true;
        }
        else if(userChoice==="Paper"){
            userWin=compChoice==="Scissors"? false : true;
        }
        else{
            userWin=compChoice==="Rock"? false: true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
}



choices.forEach( (choice)=>{
choice.addEventListener("click",()=>{
 let userChoice=choice.getAttribute("id");
    playGame(userChoice);
    //console.log("choice was clicked");
});
});