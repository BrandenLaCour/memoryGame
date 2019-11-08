var cards = [
  { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
];

var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
  } else {
    alert("sorry try again");
  }
}

function flipCard() {
  var cardId = this.getAttribute("data-id");

  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 1) {
    this.setAttribute("src", cards[cardId].cardImage);
    console.log(cardsInPlay);
  } else if (cardsInPlay.length > 1) {
    this.setAttribute("src", cards[cardId].cardImage);
    setTimeout(checkForMatch, 200);
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.querySelector("#game-board").appendChild(cardElement);
  }
}

createBoard();
