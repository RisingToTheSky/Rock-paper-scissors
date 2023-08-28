let playerSelection;
const buttons = document.querySelectorAll('button');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');


buttons.forEach(button => button.addEventListener("click", () =>{
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = `Result: ${playRound(playerSelection, computerSelection)}`;
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
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors")){
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

