let randomDefaultCard;

const generateDeckOfCards = () => {
  const numbersAndLetters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const kindOfSuit = ["♠️", "♣️", "♦️", "🖤"];
  const deckOfCards = [];
  for (let suit = 0; suit < kindOfSuit.length; suit++) {
    for (let number = 0; number < numbersAndLetters.length; number++) {
      deckOfCards.push({
        suitType: kindOfSuit[suit],
        cardNumber: numbersAndLetters[number],
        cardValue: number + 2,
      });
    }
  }
  return deckOfCards;
};

const displayRandomDefaultCard = () => {
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  document.querySelector(".card-default-suit").textContent =
    cardNumberOne.suitType;
  document.querySelector(".card-default-number").textContent =
    cardNumberOne.cardNumber;
  return cardNumberOne;
};

const selectRandomBiggerCard = () => {
  document.querySelector(".feedbackmessage").textContent = "";
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  const greaterFeedback = "Greater 😄";
  const smallerFeedback = "Smaller 😐";
  const sameValueFeedback = "🤷‍♂️";

  document.querySelector(".card-user-suit").textContent =
    cardNumberOne.suitType;
  document.querySelector(".card-user-number").textContent =
    cardNumberOne.cardNumber;

  if (cardNumberOne.cardValue > randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = greaterFeedback;
  }

  if (cardNumberOne.cardValue < randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = smallerFeedback;
  }

  if (cardNumberOne.cardValue === randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = sameValueFeedback;
  }

  setTimeout(startGame, "3000");

  return;
};

const selectRandomSmallerCard = () => {
  document.querySelector(".feedbackmessage").textContent = "";
  let deckOfCards = generateDeckOfCards();
  let indexCardNumberOne = Math.floor(Math.random() * deckOfCards.length);
  let cardNumberOne = deckOfCards[indexCardNumberOne];
  const greaterFeedback = "Greater 😐";
  const smallerFeedback = "Smaller 😄";
  const sameValueFeedback = "🤷‍♂️";

  document.querySelector(".card-user-suit").textContent =
    cardNumberOne.suitType;
  document.querySelector(".card-user-number").textContent =
    cardNumberOne.cardNumber;

  if (cardNumberOne.cardValue > randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = greaterFeedback;
  }

  if (cardNumberOne.cardValue < randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = smallerFeedback;
  }

  if (cardNumberOne.cardValue === randomDefaultCard.cardValue) {
    document.querySelector(".feedbackmessage").textContent = sameValueFeedback;
  }

  setTimeout(startGame, "3000");

  return;
};

const startGame = () => {
  randomDefaultCard = displayRandomDefaultCard();
  startButton.classList.add("hidden");
  greaterButton.classList.remove("hidden");
  smallerButton.classList.remove("hidden");
  userCardSquare.classList.remove("hidden");
  defaultCardSquare.classList.remove("hidden");
  feedBack.classList.remove("hidden");
  document.querySelector(".card-user-suit").textContent = "";
  document.querySelector(".card-user-number").textContent = "";
  document.querySelector(".feedbackmessage").textContent = "";
};

const greaterButton = document.querySelector(".greater");
greaterButton.addEventListener("click", selectRandomBiggerCard);

const smallerButton = document.querySelector(".smaller");
smallerButton.addEventListener("click", selectRandomSmallerCard);

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);

const userCardSquare = document.querySelector(".user-card");

const defaultCardSquare = document.querySelector(".default-card");

const feedBack = document.querySelector(".feedbackmessage");
