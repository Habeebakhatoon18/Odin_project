console.log("starting here!");

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    let hchoice = prompt("Enter your choice :").trim().toLowerCase();
    while (true) {
        if (hchoice == "rock" || hchoice == "paper" || hchoice == "scissors") {
            return hchoice;
        }
        else {
            hchoice = prompt("Enter valid choice:");
        }
    }
}

function playRound(getHumanChoice, getComputerChoice) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection == computerSelection) {
        console.log("round tied !");
    } else if (humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "scissors" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock") {
        console.log(`You win ! ${humanSelection} beats ${computerSelection}`);
        humanScore += 1;
    } else {
        console.log(`Computer win ! ${computerSelection} beats ${humanSelection} `);
        computerScore += 1;
    }

}
function playGame(){
    for(let i = 0;i <5;i++){
        console.log(`Round ${i+1}`);
        playRound(getHumanChoice ,getComputerChoice);
    }
    if(humanScore > computerScore){
        console.log(" Congratulations! You win the game .")
    }else if(humanScore < computerScore){
console.log("You lose ! Game Ends .");
    }else{
        console.log("Match tied ! Game Ends");
    }
}

playGame();

