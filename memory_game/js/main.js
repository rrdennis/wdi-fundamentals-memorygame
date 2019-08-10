console.log('Up and running!');

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log('You found a match!');
    } else {
      console.log('Sorry, try again.');
    }
    cardsInPlay = [];
  }
}

function flipCard(cardId) {
  let currentCard = cards[cardId];
  console.log('User flipped ' + currentCard);
  cardsInPlay.push(currentCard);
  checkForMatch();
}

flipCard(0);
flipCard(2);
flipCard(1);
flipCard(3);
