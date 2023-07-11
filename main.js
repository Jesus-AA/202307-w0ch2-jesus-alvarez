const generateDeckOfCards = () => {
  const numbersAndLetters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const typeOfClub = ["S", "C", "D", "H"];
  const deckOfCards = [];
  for (let i = 0; i < typeOfClub.length; i++) {
    for (let j = 0; j < numbersAndLetters.length; j++) {
      deckOfCards.push(typeOfClub[i] + numbersAndLetters[j]);
    }
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
