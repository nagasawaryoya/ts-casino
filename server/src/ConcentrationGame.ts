import { ReplaySubject, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { Game, PlayerObj } from "./game";
import { Card } from "./card";
import { Deck } from "./deck";
import { Judgement } from "./judgement";
import { Player } from "./player";

const users: PlayerObj[] = [
  {
    name: "神経太",
    gender: 0,
    type: "human",
  },
  {
    name: "衰弱子",
    gender: 1,
    type: "human",
  },
];

type Selected = {
  player: Player<PlayerObj>;
  card: Card[];
};

type Score = {
  player: string;
  cardPair: Card[];
};

// ここで定義しなきゃいけないの不本意
const deck = new Deck();
let choiceCards$ = new ReplaySubject<Selected>(1);
let cards: Card[] = [];

export class ConcentrationGame extends Game {

  constructor() {
    super();
  }

  public select(player: Player<PlayerObj>, cardIndex: number) {
    const selectCard = deck.choice(cardIndex);

    selectCard.isOpen = true;
    cards.push(selectCard);
    console.log('１回選択');

    if (cards.length % 2 === 0) {
      let choice: Selected = {
        player: player,
        card: cards,
      };
      console.log('2回選択');
      choiceCards$.next(choice);
      cards.length = 0;
    }

    return selectCard;
  }

  public play(joker: number) {
    const judgement = new Judgement();
    const game = new Game();
    let totalScore: Score[] = [];

    deck.addJoker(joker);
    deck.shuffle();
    // console.log(this.deck)
    game.setUp(users, 2);
    const players = game.players;

    choiceCards$
      .pipe(filter(() => deck.length() !== 0))
      .subscribe((select: Selected) => {
        // 引いたカードの数字が揃っているか
        let isDuplicate = judgement.duplicateNumber(select.card);
        if (!isDuplicate) {
          // 次のプレーヤーに移る
        } else {
          let pair: Card[] = [];
          select.card.map((card: Card) => {
            pair.push(deck.get(card));
          });
          // 得点
          totalScore.push({
            player: select.player.player.name,
            cardPair: pair,
          });
          console.log(totalScore);
          return totalScore
        }
      });

    const playerCount = players.length;
    const randomTurnIndex = Math.floor(Math.random() * playerCount);
    players.map((player, i) => {
      if (i === randomTurnIndex) {
        player.isTurn = true;
      } else {
        player.isTurn = false;
      }
    })

    return {
      player: players,
      deck: deck,
    }
  }
}
