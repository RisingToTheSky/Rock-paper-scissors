let playerSelection;
const buttons = document.querySelectorAll('button');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector('#resultText');
const finalResultText = document.querySelector('#finalResultText')

/*Button functions*/
buttons.forEach(button => button.addEventListener("click", () =>{
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${capitalize(playerSelection)}`;
    computerText.textContent = `Computer: ${capitalize(computerSelection)}`;
    scoreTextPlayer.textContent = `Player Score: ${playerScore}`
    scoreTextComputer.textContent = `Computer Score: ${computerScore}`
    resultText.textContent = `Result: ${playRound(playerSelection, computerSelection)}`;
    finalResultText.textContent = `${determineWinner()}`;
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

function playRound(playerSelection, computerSelection){
    if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")){
        ++computerScore;
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors")){
        ++playerScore;
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    }else{
        return `Tie! ${capitalize(playerSelection)} cannot beat ${capitalize(computerSelection)}`;
    }
}
function determineWinner(){
    if (playerScore === 5){
        return "Player wins!";
    }else if (computerScore === 5){
        return "Computer wins!";
    }else{
        return "Who will win?";
    }
}
   

    /*Create loop to loop over function and to display round count*/
    /*Capitalize text for the return functions*/
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

