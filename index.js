const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
function RandomCardGenerator() {
  return Math.floor(Math.random() * suits.length);
}

const randomSuit = suits[RandomCardGenerator()];

const topSuit = document.querySelector(".arriba");
if (randomSuit == "&hearts;") {
  topSuit.style.color = "red";
}
if (randomSuit == "&diams;") {
  topSuit.style.color = "red";
}
topSuit.innerHTML = randomSuit;

const bottomSuit = document.querySelector(".abajo");
if (randomSuit == "&hearts;") {
  bottomSuit.style.color = "red";
}
if (randomSuit == "&diams;") {
  bottomSuit.style.color = "red";
}
bottomSuit.innerHTML = randomSuit;

function RandomCardNumber() {
  return Math.floor(Math.random() * numbers.length);
}

const randomNumber = numbers[RandomCardNumber()];

const NewNumber = document.querySelector(".numero");
NewNumber.innerHTML = randomNumber;