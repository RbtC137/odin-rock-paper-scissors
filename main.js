const scoreBoard = [0, 0, 0]

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
    }else if(playerSelection.toLowerCase() === 'scissors'){
        res = computerSelection==='scissors'?'Tie, both Scissors'
        :computerSelection==='rock'? 'You Lose! Rock beats Scissors': 'You Win! Scissors beats Paper';
    }else {
        res = 'Invalid input!!!'
    }
    if(res.search('Win')!==-1){
        scoreBoard[0] += 1;
    }else if(res.search('Lose')!==-1){
        scoreBoard[1] += 1;
    }else {
        scoreBoard[2] += 1;
    }
    return res
}

function playGame() {
    let playerSelection = prompt('Show your move!');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection),`player:${scoreBoard[0]}, computer:${scoreBoard[1]}, Tie: ${scoreBoard[2]}`)
}

while(1){
    playGame();
}