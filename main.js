const generateDeckOfCards = () => {
  const numbersAndLetters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const kindOfSuit = ["Spades", "Clubs", "Diamonds", "Hearts"];
  const deckOfCards = [];
  for (let suit = 0; suit < kindOfSuit.length; suit++) {
    for (let number = 0; number < numbersAndLetters.length; number++) {
      deckOfCards.push({
        suitType: kindOfSuit[suit],
        cardNumber: numbersAndLetters[number],
      });
    }
  }

  return deckOfCards;
};

const selectRandomCard = () => {
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  console.log(typeof cardNumberOne);
  return cardNumberOne;
};

const startGame = () => {
  generateDeckOfCards();
  console.log(selectRandomCard());
};

startGame();
