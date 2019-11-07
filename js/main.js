var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
  } else {
    alert("sorry try again");
  }
}

function flipCard(cardId) {
  console.log("user flipped" + cards[cardId]);

  cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(1);
checkForMatch();
