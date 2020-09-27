import { Card } from "./card";
import { Deck } from "./deck";
import { Judgement } from "./judgement";

const joker = 2;
const deck = new Deck(joker);
const judgement = new Judgement();
let choiceCards: Card[] = [];
let getCards: Card[] = [];

// deck.shuffle();

// カードを引く
choiceCards.push(deck.choice(1));
choiceCards.push(deck.choice(3));

if (choiceCards.length === 2) {
  // 引いたカードの数字が揃っているか
  let isDuplicate = judgement.duplicateNumber(choiceCards);

  if (isDuplicate) {
    choiceCards.map((card: Card) => {
      // 得点
      getCards.push(deck.get(card))
    });
    choiceCards.length = 0;
  }
}