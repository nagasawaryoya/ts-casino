import axios from "axios";
import { Player } from "../../../../server/src/player";
import { PlayerObj } from "../../../../server/src/game";

export default {
  start: () => {
    return axios.get(`/api/start/`)
      .then(response => response);
  },
  select: (player: Player<PlayerObj>, cardIndex: number) => {
    return axios.post(`/api/select/`, {
      params: {
        player: player,
        cardIndex: cardIndex,
      }
    }).then(response => response);
  }
};
