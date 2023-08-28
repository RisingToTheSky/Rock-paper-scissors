let computerScore = 0;
let playerScore = 0;

let playerSelection;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", () =>{
    playerSelection = button.textContent.toLowerCase();
    console.log(playerSelection);
}))

function getComputerChoice(choice){    
    choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1){
        return "rock";
    }else if (choice === 2)
        return "paper";
    else if (choice === 3)
        return "scissors"; 
}
function game(result){
    function playRound(playerSelection, computerSelection){
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
    /*Capitalize text for the return functions*/
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