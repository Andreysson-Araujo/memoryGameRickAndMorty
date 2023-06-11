const grid = document.querySelector(".grid");

const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
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


let firstCard = "";
let secondCard = "";

//Faz uma contagem  continua onde verifica que se todos os pares estão de acordo.
function checkEndGame() {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if(disabledCards.length == 20){
    alert("Parabens você ganhou")
  }
}

//fazendo verificação da jogada
function checkCards() {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  //se a verificação for valida as cartas ficam viradas e desabilitadas
  if (firstCharacter == secondCharacter) {

    firstCard.firstChild.classList.add("disabled-card")
    secondCard.firstChild.classList.add("disabled-card")

    firstCard = "";
    secondCard = ""
    //verifica se o jogador venceu o jogo
    checkEndGame()

    // se não ocorrem a contagem de 500milisegundos e elas voltam a posição inicial
  }else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";

    }, 500);
  }

}

//função para virar carta ao clicar
function revealCard({ target }) {

  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard == "") {

    target.parentNode.classList.add("reveal-card")
    firstCard = target.parentNode

  } else if (secondCard == "") {

    target.parentNode.classList.add("reveal-card")
    secondCard = target.parentNode
    
    checkCards()
  }

}


//criando carta
function createCard(character) {

  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../imagens/${character}.png')`

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard)
  card.setAttribute("data-character", character)

  return card;
}


// essa função faz a leitura da lista retornando os personagens nas cartas
function loadGame() {
  //duplica nossas listas de personagens e jogamos ele na variavel shuffeldArray onde a mesma embaralha
  const duplicateCharacters = [... characters, ... characters];

  //Emparalha os cadars utilizando o o metodo sort
  const shuffledArray = duplicateCharacters.sort(() => Math.random()- 0.5)

  shuffledArray.forEach((character) => {

    const card = createCard(character);
    grid.appendChild(card);
  });
}

loadGame();
