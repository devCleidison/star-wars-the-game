document.addEventListener("DOMContentLoaded", () => {
  let charactersContainer = document.getElementById('character-container')
  let characters = document.querySelectorAll('.square-character');

  setTimeout(() => {
    charactersContainer.style.opacity = '1';
  }, 20000);

  characters.forEach((character) => {
    character.style.backgroundColor = '#fce02bde';
    character.addEventListener('click', selectCharacter);
  });
});

function selectCharacter(event){
  let characters = document.querySelectorAll('.square-character');
  let toggleCharacter = event.target;
  let play;

  characters.forEach((character) => {
    character.style.backgroundColor = '#fce02bde';
  })

  toggleCharacter.style.backgroundColor = '#b3a54ade';

  if(toggleCharacter.dataset.character == play){
    toggleCharacter.style.backgroundColor = '#fce02bde';
  }
  
  play = toggleCharacter.dataset.character;
  playerTime = toggleCharacter.dataset.character;
}
