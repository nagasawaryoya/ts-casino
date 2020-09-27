import { Card } from "./card";
import { Deck } from "./deck";
import { Judgement } from "./judgement";

const joker = 2;
const deck = new Deck(joker);
const judgement = new Judgement();
let choiceCards: Card[] = [];
let totalScore: Card[][] = [];

// deck.shuffle();

// カードを選ぶ
choiceCards.push(deck.choice(1));
choiceCards.push(deck.choice(3));

if (choiceCards.length === 2) {
  // 引いたカードの数字が揃っているか
  let isDuplicate = judgement.duplicateNumber(choiceCards);
  if (!isDuplicate) {
    // 次のプレーヤーに移る

  } else {
    let tmp: Card[] = [];
    choiceCards.map((card: Card) => {
      tmp.push(deck.get(card));
    });
    // 得点
    totalScore.push(tmp);
  }
  choiceCards.length = 0;
}
console.log(totalScore)