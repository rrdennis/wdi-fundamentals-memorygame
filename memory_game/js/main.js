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

var scoreElement = document.querySelector('#pointer');
var turnsElement = document.querySelector('#turner');
var gameBoard = document.querySelector('#game-board');

function createBoard() {
  cards.forEach(function(card, i) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);

    gameBoard.appendChild(cardElement);
  });
}

var cardsInPlay = [];
var playerScore = 0;
var playerTurns = 0;

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      playerScore += 1;
      scoreElement.innerText = playerScore;
      alert('You found a match!');
    } else {
      alert('Sorry, try again.');
    }
    playerTurns += 1;
    turnsElement.innerText = playerTurns;
    cardsInPlay = [];
    gameBoard.innerHTML = '';
    createBoard();
  }
}

function flipCard() {
  cardId = this.getAttribute('data-id');
  let currentCard = cards[cardId];
  console.log('User flipped ' + currentCard.rank);
  console.log(currentCard.cardImage);
  console.log(currentCard.suit);
  cardsInPlay.push(currentCard);
  this.setAttribute('src', currentCard.cardImage);
  checkForMatch();
}

function resetGame() {
  gameBoard.innerHTML = '';

  playerScore = 0;
  scoreElement.innerText = playerScore;

  playerTurns = 0;
  turnsElement.innerText = playerTurns;

  createBoard();
}

var resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', resetGame);

createBoard();
