function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * 3);

  return choices[compChoice];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
  return choices.includes(humanChoice) ? humanChoice : getHumanChoice();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}!`);
    console.log(`Computer chose: ${computerChoice}!`);

    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      } else if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      } else if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      }
    }
    return;
  }

  for (let i = 0; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Your score is: ${humanScore}`);
  console.log(`The computer's score is ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("You lose!");
  }

  return;
}

playGame();
