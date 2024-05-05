const choice = ["papel", "piedra", "tijera"];
const paper = document.getElementsByClassName("btn-papel");
const rock = document.getElementsByClassName("btn-piedra");
const scissors = document.getElementsByClassName("btn-tijera");

  function getComputerChoice() {
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
  }

  function getPlayerChoice(callback) {
    for (const button of paperButtons) {
      button.addEventListener("click", function() {
        callback(choice[0]);
      });
    }
    for (const button of rockButtons) {
      button.addEventListener("click", function() {
        callback(choice[1]);
      });
    }
    for (const button of scissorsButtons) {
      button.addEventListener("click", function() {
        callback(choice[2]);
      });
    }
  }

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
          return "Empate";
        } else if (
          (playerSelection === "piedra" && computerSelection === "tijera") ||
          (playerSelection === "papel" && computerSelection === "piedra") ||
          (playerSelection === "tijera" && computerSelection === "papel")
      ) {
          return "Ganaste";
        } else {
          return "Perdiste";
        }
    }

   document.addEventListener("DOMContentLoaded", function() {
      getPlayerChoice(function(playerSelection) {
        const computerSelection = getComputerChoice();
        console.log(`La computadora eligió: ${computerSelection}`);

        const computerSelect = document.getElementById("computerSelect");
        computerSelect.textContent = `La pc eligió: ${computerSelection}`;

        const playerSelect = document.getElementById("playerSelect");
        playerSelect.textContent = `Elegiste: ${playerSelection}`;

        const resultado = document.getElementById("resultado");
        resultado.textContent = playRound(playerSelection, computerSelection);
        });
  });








      /* const playerSelection = prompt("Eligí una opción: piedra, papel, o tijera");
      if (choice.includes(playerSelection)) {
        console.log(`Elegiste: ${playerSelection}`);
        return playerSelection;
      } else {
        console.log("Opción no válida. Eligí una opción válida");
        return getPlayerChoice();
      }*/