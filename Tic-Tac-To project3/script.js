console.log("starting here!");

let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function getHumanChoice(){
    let hchoice = prompt("Enter your choice :");
    while(true){
    if(hchoice.toLowerCase() == "rock" || hchoice.toLowerCase() =="paper" || hchoice.toLowerCase() == "scissors"){
        return hchoice;
    }
    else{
       hchoice= prompt("Enter valid choice:");
    }
    }
}

console.log(getHumanChoice());
function playRound(getHumanChoice ,getComputerChoice){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if(humanSelection == computerSelection){
        console.log("round tied !");
    }

    else if(humanSelection == "rock" && computerSelection == "scissors" ||humanSelection =="scissors" &&  computerSelection == "paper" || humanSelection == "paper" && computerSelection =="rock" ) 
        {
        console.log(`You win ! ${humanSelection} beats ${computerSelection}`);
        humanScore += 1;
    }

    else{
        console.log(`Computer win ! ${computerSelection} beats ${humanSelection} `);
        computerScore +=1;
    }

}

