let game = document.getElementsByClassName("game")[0];

document.addEventListener("DOMContentLoaded", () => {
  let charactersContainer = document.getElementById("character-container");
  let characters = document.querySelectorAll(".square-character");
  let squares = document.querySelectorAll(".square");

  setTimeout(() => {
    charactersContainer.style.opacity = "1";
  }, 20000);

  characters.forEach((character) => {
    character.style.backgroundColor = "#fce02bde";
    character.addEventListener("click", selectCharacter);
  });

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function selectCharacter(event) {
  let characters = document.querySelectorAll(".square-character");
  let toggleCharacter = event.target;
  let play;

  characters.forEach((character) => {
    character.style.backgroundColor = "#fce02bde";
  });

  toggleCharacter.style.backgroundColor = "#b3a54ade";

  if (toggleCharacter.dataset.character == play) {
    toggleCharacter.style.backgroundColor = "#fce02bde";
  }

  play = toggleCharacter.dataset.character;
  playerTime = toggleCharacter.dataset.character;
}

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  let symbol = symbols[playerTime];

  if (handleMove(position)) {
    setTimeout(() => {
      game.style.display = "none";
    }, 300);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  square.innerHTML = `<div class='${symbol}'></div>`;
}

function startGame() {
  let initialContainer =
    document.getElementsByClassName("initial-container")[0];
  let charactersContainer = document.getElementById("character-container");
  let game = document.getElementsByClassName("game")[0];

  game.style.display = "initial";
  charactersContainer.style.display = "none";
  initialContainer.style.visibility = "hidden";

  let squares = document.querySelectorAll(".square");

  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  squares.forEach((square) => {
    square.innerHTML = "";
  });

  restart.style.display = "none";
}
