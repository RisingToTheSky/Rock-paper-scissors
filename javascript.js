/*Computer choice between rock, paper and scissors*/
function getComputerChoice(choice){    
    /*Use math.random() to choose between rock, paper and scissors*/
    choice = Math.floor(Math.random() * 3) + 1;
    /* if math.random() has one, return, rock, two, paper, three, scissors*/
    if (choice === 1){
        return "rock";
    }else if (choice === 2)
        return "paper";
    else if (choice === 3)
        return "scissors"; 
}
/*playRound function*/

function playRound(playerSelection, computerSelection){
    if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors")){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `Tie! ${playerSelection} cannot beat ${computerSelection}`;
    }
}
const playerSelection = prompt("Rock paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice()
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));