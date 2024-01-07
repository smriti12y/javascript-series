let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame= ()=>{
    
    msg.innerText="Game was Draw! Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,campChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You win! ${userChoice} beats ${campChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${campChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user Choice=",userChoice);
    //Generate computer choice-->
    const compChoice=genCompChoice();
    console.log("comp Choice=",compChoice );
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice  ==="rock"){
            userWin = compChoice ==="paper" ? false:true;
        } else if (userChoice ==="paper")
        {
            userWin=compChoice="scissors"? false:true;
        } else{
            userWin= compChoice==="rock"?false:true;
       }
       showWinner(userWin,userChoice,compChoice);

    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const  userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });
});


