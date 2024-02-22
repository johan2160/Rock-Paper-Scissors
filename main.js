const options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let score = 0;

const getComputerChoice = () => {
  const indexOfOption = Math.trunc(Math.random() * options.length);
  const computerSelection = options[indexOfOption];
  return computerSelection;
};

const getPlayerSelection = () => {
  let playerSelection = prompt(
    "Select an option between: Rock, Paper or Scissors"
  );
  playerSelection = playerSelection.toLowerCase();

  if (options.includes(playerSelection)) {
    alert(`You choose: ${playerSelection}`);
    return playerSelection;
  } else {
    alert(
      `The option: ${playerSelection} is not valid. Please press cancel to restart the game`
    );
    return;
  }
};

const playGame = () => {
  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      alert(
        `You chose: ${playerSelection} - Computer chose: ${computerSelection}. You are the winner!`
      );
      ++userScore;
    } else if (playerSelection === computerSelection) {
      alert(
        `You chose: ${playerSelection} - Computer chose: ${computerSelection}. That's a tie`
      );
    } else {
      alert(
        `You chose: ${playerSelection} - Computer chose: ${computerSelection}.  Computer is the winner`
      );
      ++computerScore;
    }

    score = `You: ${userScore} - Computer: ${computerScore}`;
    return console.log(score);
  }

  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
};

while (userScore !== 5 && computerScore !== 5) {
  playGame();
}
