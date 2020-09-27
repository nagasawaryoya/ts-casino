import { Card, Suit } from "./card";

/**
 * 山札クラス
 *
 */
export class Deck {
  cards: Card[] = [];

  constructor (jokerCount?: number) {
    const SUITS: Suit[] = ['spade', 'heart', 'diamond', 'club'];

    for (let i = 1; i <= 13; i++) {
      SUITS.map((suit) => {
        this.cards.push(new Card(suit, i));
      })
    }

    // 指定枚ジョーカーを含める
    if (jokerCount) {
      for (let i = 0; i < jokerCount; i++) {
        this.cards.push(new Card('joker', 0));
      }
    }
  }


  /**
   * シャッフル
   *
   */
  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.cards[i];
      this.cards[i] = this.cards[r];
      this.cards[r] = tmp;
    }
  }

  /**
   * カードを選択
   *
   * @param i 選択するカードの添字
   */
  public choice(i: number): Card {
    return this.cards[i];
  }

  /**
   * カードを山札から除いて、除いたカードを返す
   *
   * @param cards 選択したカードの配列
   */
  public get(card: Card): Card {
    const i = this.cards.indexOf(card);

    return this.cards.splice(i, 1)[0];
  }

  // /**
  //  * 指定枚数カードを配る
  //  *
  //  * @param count 返すカードの枚数
  //  */
  // public deal(count: number): Card[] {
  //   return this.cards.splice(0, count);
  // }

  // /**
  //  * カードを引く
  //  *
  //  */
  // public draw() {}
}