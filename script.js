const selection = document.querySelectorAll(".selection");
const results = document.querySelector(".results");
const para = document.createElement("p");
const outcome = document.createElement("p");
const scoreboard = {
  win: 0,
  lose: 0,
  draw: 0,
};

game();

function game() {
  selection.forEach((button) => {
    button.addEventListener("click", function () {
      if (scoreboard.win < 5 && scoreboard.lose < 5) {
        let playerChoice = button.id;
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        score(result);
        updateScore();
        if (scoreboard.win == 5 || scoreboard.lose == 5)  {
          announceWinner();
        }
      }
    });
  });
}

function announceWinner() {
  scoreboard.win > scoreboard.lose
    ? (outcome.textContent = "You Win!")
    : (outcome.textContent = "Sorry, You Lose!!");
  outcome.style.textAlign = "center";
  results.appendChild(outcome);
}

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else return "scissors";
}

function score(result) {
  if (result === "win") {
    scoreboard.win += 1;
  } else if (result === "lose") {
    scoreboard.lose += 1;
  } else if (result === "draw") {
    scoreboard.draw += 1;
  }
}

function updateScore() {
  para.textContent =
    "wins: " +
    scoreboard.win +
    ", losses: " +
    scoreboard.lose +
    ", draws: " +
    scoreboard.draw;
  results.appendChild(para);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("Draw this round! You both chose " + playerChoice);
    return "draw";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert("You loose this round, paper covers rock!");
    return "lose";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("You win this round, rock crushes scissors!");
    return "win";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("You win this round, paper covers rock!");
    return "win";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert("You loose this round, scissors cuts paper!");
    return "lose";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert("You loose this round, rock crushes scissors!");
    return "lose";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("You win this round, scissors cuts paper!");
    return "win";
  }
}
