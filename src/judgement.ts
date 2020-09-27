import { Card } from "./card";

/**
 * 判定クラス
 *
 */
export class Judgement {
  constructor(){}

  /**
   * 渡されたカードの数字が同じか判定する
   *
   */
  public duplicateNumber (cards: Card[]): boolean {
    const set = new Set();

    cards.map((card: Card) => {
      set.add(card.rank);
    })

    return (set.size === 1) ? true : false;
  }
}