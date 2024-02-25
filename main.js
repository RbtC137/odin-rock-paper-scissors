const roundInfo = document.querySelector('.round-info');
let roundCount = 1;
const playerSelectionsPads = document.querySelectorAll(".player-move");
playerSelectionsPads.forEach((element) => {
    element.addEventListener('click', () => {
        const playerSelection = event.target.id.split('-')[0];
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    })
});


function getComputerChoice() {
    const rand = Math.random();
    if(rand >=0 && rand < 0.33){
        return 'rock'
    }else if(rand >=0.33 && rand < 0.66){
        return 'paper'
    }else if(rand >= 0.66 && rand < 1){
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    if(roundCount > 5){
        //clear out the round info
        const scoreMsg = document.querySelectorAll(".scoreMsg");
        scoreMsg.forEach((node) => {
            node.parentElement.removeChild(node);
        });
        roundCount = 1;
    }
    const para = document.createElement('p');
    para.classList.add("scoreMsg");
    if(playerSelection === computerSelection){
        //draw
        para.textContent = `Round ${roundCount} - DRAW          Both: ${playerSelection}`;
    }else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper' ) {
        //playerWin
        para.textContent = `Round ${roundCount} - Player WIN        Player: ${playerSelection} Bot: ${computerSelection}`;
    }else {
        //playerLose
        para.textContent = `Round ${roundCount} - Player LOSE       Player: ${playerSelection} Bot: ${computerSelection}`;
    }
    roundInfo.appendChild(para);
    roundCount++;
}