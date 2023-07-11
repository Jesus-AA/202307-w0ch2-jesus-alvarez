const generateDeckOfCards = () => {
  const deckOfCards = [];

  for (i = 0; i < 13; i++) {
    deckOfCards.push({ card: i + 1, club: "spades", boolean: false });
  }

  for (i = 0; i < 13; i++) {
    deckOfCards.push({ card: i + 1, club: "clubs", boolean: false });
  }

  for (i = 0; i < 13; i++) {
    deckOfCards.push({ card: i + 1, club: "diamonds", boolean: false });
  }

  for (i = 0; i < 13; i++) {
    deckOfCards.push({ card: i + 1, club: "hearts", boolean: false });
  }

  return deckOfCards;
};

const selectRandomCard = () => {
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  return cardNumberOne;
};

console.log(`Your card is ${selectRandomCard()}`);
