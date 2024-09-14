console.log("starting here!");

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function getHumanChoice(){
    let hchoice = prompt("Enter your choice :");
    while(true){
    if(hchoice == "rock" || hchoice =="paper" || hchoice == "scissors"){
        return hchoice;
    }
    else{
       hchoice= prompt("Enter valid choice:");
    }
    }
}

console.log(getHumanChoice());