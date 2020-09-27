export type Suit = 'spade' | 'heart' | 'diamond' | 'club' | 'joker';

/**
 * カードクラス
 *
 */
export class Card {

  suit: Suit;
  rank: number;

  constructor (suit: Suit, rank: number) {
    this.suit = suit;
    this.rank = rank;
  }
}