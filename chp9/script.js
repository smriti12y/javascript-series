let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame= ()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw! Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    } else {
        console.log("you lose");
        msg.innerText="You lose!";
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
       showWinner(userWin);

    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const  userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });
});

