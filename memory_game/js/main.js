console.log('Up and running!');

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

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
  console.log('User flipped ' + currentCard.rank);
  console.log(currentCard.cardImage);
  console.log(currentCard.suit);
  cardsInPlay.push(currentCard);
  checkForMatch();
}

console.log(cards[0]);

flipCard(0);
flipCard(2);

// object for each card to store name, suit, image
// access values not from array, but from specific card object
