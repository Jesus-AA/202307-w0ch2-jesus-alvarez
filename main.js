const generateDeckOfCards = () => {
  const deckOfCards = [];
  for (i = 0; i < 13; i++) {
    deckOfCards.push({
      cardNumber: i + 1,
      typeOfSuit: "spades",
      boolean: false,
    });
  }
  for (i = 0; i < 13; i++) {
    deckOfCards.push({
      cardNumber: i + 1,
      typeOfSuit: "clubs",
      boolean: false,
    });
  }
  for (i = 0; i < 13; i++) {
    deckOfCards.push({
      cardNumber: i + 1,
      typeOfSuit: "diamonds",
      boolean: false,
    });
  }
  for (i = 0; i < 13; i++) {
    deckOfCards.push({
      cardNumber: i + 1,
      typeOfSuit: "hearts",
      boolean: false,
    });
  }
  return deckOfCards;
};

const selectRandomCard = () => {
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  return cardNumberOne;
};

console.log(selectRandomCard());
