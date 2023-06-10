const grid = document.querySelector(".grid");

const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

//Realiza a criação dos elementos necessarios para a carta
function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//criando carta
function createCard(character) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../imagens/${character}.png')`

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

// essa função faz a leitura da lista retornando os personagens nas cartas
function loadGame() {
  characters.forEach((character) => {

    const card = createCard(character);
    grid.appendChild(card);
  });
}

loadGame();
