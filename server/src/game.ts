import { Human } from "./human";
import { Computer } from "./computer";
import { Player } from "./player";

export type PlayerObj = {
  name: string;
  gender: number;
  type: "human" | "computer";
};

export class Game {
  players: Player<PlayerObj>[] = [];

  public setUp(users: PlayerObj[], comCount: number) {
    for (const user of users) {
      this.players.push(new Player(user));
    }

    for (let i = 0; i < comCount; i++) {
      const com: PlayerObj = {
        name: "COM" + i,
        gender: Math.floor(Math.random() * 2),
        type: "computer",
      };
      this.players.push(new Player(com));
    }
  }
}
