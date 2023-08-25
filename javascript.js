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

