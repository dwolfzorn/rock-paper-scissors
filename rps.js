let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
  }

  updateDisplay(result);
}

function updateDisplay(result) {
  document.getElementById("round-result").textContent = result;
  document.getElementById("score").textContent = `Player: ${playerScore}  |  Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
    document.getElementById("winner").textContent = winner;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rock").addEventListener("click", () => playRound("rock"));
  document.getElementById("paper").addEventListener("click", () => playRound("paper"));
  document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
});
