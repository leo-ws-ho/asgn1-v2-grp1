const NUM_TRIALS = 3;
const suits = ['H', 'D', 'C', 'S'];
const numbers = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']

function getCards() {
let drawnCards = []
  for (let i = 0; i< suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
    let cards = suits[i] + numbers[j]
    drawnCards.push(cards)
    }
  }
  return drawnCards
}
let drawnCard = getCards()
console.log(drawnCard)
/**
 * returns a card as a number, 0 -- 51.
 * 0 as SA, 1 as HA, 2 as DA, 3 as CA, 4 as SK, ...
 */
function drawACard() {
  return Math.floor(Math.random() * drawnCard.length);
}
console.log(drawACard)
/**
 * returns an array of cards, i.e., an array of five 0-51 integers.
 * [0, 4, 8, 12, 16] indicates [SA, SK, SQ, SJ, ST]
 */
function drawHand() {
  // Your code here.
}

/**
 * checks if all cards in the input hand are of the same suit.
 * @param {Array} hand a hand.
 * @returns {Boolean}
 */
function isSameSuit(hand) {
  // Your code here.
}

/**
 * checks if all cards are in a sequence.
 * @param {Array} hand a hand.
 * @returns {Boolean}
 */
function isInSequence(hand) {
  // Your code here.
}

/**
 * sorts the cards in the hand in descending order of "power".
 * @param {Array} hand a poker hand.
 */
function sortHand(hand) {
  // Your code here.
}

let hand = drawHand();
// let hand = [0, 4, 8, 12, 16];
// let hand = [0, 12, 8, 5, 17];
// let hand = [4, 28, 8, 16, 32]

console.log("Hand: ", hand);
console.log("Sorted Hand: ", sortHand(hand));
console.log("Is of the same suit? ", isSameSuit(hand));
console.log("Is in sequence? ", isSameSuit(hand));
