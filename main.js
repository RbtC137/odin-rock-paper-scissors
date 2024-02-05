const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

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
    let res = '';
    if(playerSelection.toLowerCase() === 'rock'){
        res = computerSelection==='rock'?'Tie, both Rock'
        :computerSelection==='paper'? 'You Lose! Paper beats Rock': 'You Win! Rock beats Scissors';
    }else if(playerSelection.toLowerCase() === 'paper'){
        res = computerSelection==='paper'?'Tie, both Paper'
        :computerSelection==='scissors'? 'You Lose! Scissors beats Paper': 'You Win! Paper beats Rock';
    }else{
        res = computerSelection==='scissors'?'Tie, both Scissors'
        :computerSelection==='rock'? 'You Lose! Rock beats Scissors': 'You Win! Scissors beats Paper';
    }
    return res
}