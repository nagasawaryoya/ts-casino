import { Human } from "./human";
import { Computer } from "./computer";

export class Player<P extends Human | Computer> {
  player: P;
  isTurn?: boolean;
  point?: number;

  constructor(player: P) {
    this.player = player;
  }
}
