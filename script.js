//Selecting Elements - 
let body = document.querySelector('body');
let buttonOne = document.querySelector('.btn-1');
let buttonTwo = document.querySelector('.btn-2');
let buttonThree = document.querySelector('.btn-3');
let myScore = document.querySelector('.my-score');
let computerScore = document.querySelector('.computer-score');


// Creting Element -
let finalResult = document.createElement('h3');
finalResult.style.color = 'Red';
body.append(finalResult);


// Logic => (0 - 1 = Rock), (1 -2 = Paper), (2 - 3 = Scissors);


// Making Computer Choices - 
let computer = () => {
    let computerChoice ;
    let randomNum = Math.random() * 3;
    if (randomNum < 1) {
        computerChoice = 'Rock'
    } else if (randomNum < 2 ) {
        computerChoice = 'Paper';
    } else if (randomNum < 3) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

let result ;

buttonOne.addEventListener(('click'), () => {
    let myScoreValue = parseInt(myScore.innerText);
    let computerScoreValue = parseInt(computerScore.innerText);
    let computerTurn = computer();
    if (computerTurn === 'Rock') {
        result = `Computer got ${computerTurn} and Its a draw`;
    } else if (computerTurn === 'Paper') {
        computerScore.innerText = computerScoreValue + 1;
        result = `Computer got ${computerTurn} and you Lost`;
    } else if (computerTurn === 'Scissors') {
        result = `Computer got ${computerTurn} and you Won`
        myScore.innerText = myScoreValue + 1;
    }
    finalResult.innerText = result;
    console.log(result);
})

buttonTwo.addEventListener('click', () => {
    let myScoreValue = parseInt(myScore.innerText);
    let computerScoreValue = parseInt(computerScore.innerText);
    let computerTurn = computer();
    if (computerTurn === 'Rock') {
        myScore.innerText = myScoreValue + 1;
        result = `Computer got ${computerTurn} and You Won`;
    } else if (computerTurn === 'Paper') {
        result = `Computer got ${computerTurn} and Its a Draw`;
    } else if (computerTurn === 'Scissors') {
        computerScore.innerText = computerScoreValue + 1;
        result = `Computer got ${computerTurn} and You Lost`;
    }
    finalResult.innerText = result;
    console.log(result);
})

buttonThree.addEventListener('click', () => {
    let myScoreValue = parseInt(myScore.innerText);
    let computerScoreValue = parseInt(computerScore.innerText);
    let computerTurn = computer();

    if (computerTurn === 'Rock') {
        computerScore.innerText = computerScoreValue + 1;
        result = `Computer got ${computerTurn} and You Lost`;
    } else if (computerTurn === 'Paper') {
        myScore.innerText = myScoreValue + 1;
        result = `Computer got ${computerTurn} and You Won`;
    } else if (computerTurn === 'Scissors') {
        result = `Computer got ${computerTurn} and Its a Draw`;
    }
    finalResult.innerText = result;
    console.log(result);
})
