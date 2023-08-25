let computerScore = 0;
let playerScore = 0;
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
/*Game function*/
function game(result){
/*playRound function*/
    function playRound(playerSelection, computerSelection){
        /*if statement to check who wins*/
        if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")){
            computerScore++;
            return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        }else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors")){
            playerScore++;
            return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        }else{
            return `Tie! ${capitalize(playerSelection)} cannot beat ${capitalize(computerSelection)}`;
        }
    }
    /*Create loop to loop over function and to display round count*/
    for (let roundCount = 1; roundCount < 6; roundCount++){
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Round count: ${roundCount}`);
    }
    /*Capitalize text*/
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (computerScore < playerScore){
        console.log("End of the game! Player wins!");
    }else{
        console.log("End of the game! Computer wins!");
    }
}
game();


