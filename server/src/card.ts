export type Suit = 'spade' | 'heart' | 'diamond' | 'club' | 'joker';

/**
 * カードクラス
 *
 */
export class Card {

  suit: Suit;
  rank: number;
  isOpen: boolean;

  constructor (suit: Suit, rank: number, isOpen: boolean) {
    this.suit = suit;
    this.rank = rank;
    this.isOpen = isOpen;
  }
}