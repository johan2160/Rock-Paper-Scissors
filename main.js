// Conseguir todos los elementos de HTML y guardarlos en sus respectivas variables.

let playerChoice = document.querySelector(".score__player-choice");
let computerChoiceDisplay = document.querySelector(".score__computer-choice");
let playerCount = document.querySelector(".score__player-count");
let computerCount = document.querySelector(".score__computer-count");
const userChoices = document.querySelectorAll(".choices__btn");
let playerScore = 0;
let computerScore = 0;

// Crear una array con las opciones del juego.
const options = ["✊", "✋", "✌"];

// Crear una funcion con la opcion que escoge el computador.
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerChoice = options[randomIndex];
  computerChoiceDisplay.textContent = computerChoice;
  return computerChoice;
};

// Agregarle un eventListener al momento de que el usuario hace click en algunas de las opciones.
userChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerChoice.textContent = choice.textContent;
    const computerChoice = getComputerChoice();
    playRound(playerChoice.textContent, computerChoice);
  });
});

// Checkear el ganador de cada round
function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "✊" && computerChoice === "✌") ||
    (playerChoice === "✋" && computerChoice === "✊") ||
    (playerChoice === "✌" && computerChoice === "✋")
  ) {
    ++playerScore;
    playerCount.textContent = `Player: ${playerScore}`;
  } else if (playerChoice === computerChoice) {
    console.log(`That's a tie`);
  } else {
    ++computerScore;
    computerCount.textContent = `Computer: ${computerScore}`;
  }

  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
  if (playerScore === 5 && computerScore < 5) {
    alert(`You are the winner!, Press F5 on your keyboard to reset the score`);
  } else if (computerScore === 5 && playerScore < 5) {
    alert(
      `Computer is the winner¡¡, Press F5 on your keyboard to reset the score`
    );
  }
}
