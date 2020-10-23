<template>
  <!-- 神経衰弱 -->
  <div class="concentration">
    <div class="card_space">
      <template v-for="(card, i) of cards">
        <template v-if="card.isOpen">
          <CardCompornent
            :key="i"
            :card="card"
            @click="cardSelect(i)"
          ></CardCompornent>
        </template>
        <template v-else>
          <CardCompornent
            :key="i"
            :card="[]"
            @click="cardSelect(i)"
          ></CardCompornent>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ConcentrationService from "../../services/cardGameService/ConcentrationService";
import CardCompornent from "@/components/atoms/trump/Card.component.vue";
import { Card } from "../../../../server/src/card";
import { Player } from "../../../../server/src/player";
import { PlayerObj } from "../../../../server/src/game";

@Options({
  components: {
    CardCompornent
  }
})
export default class Concentration extends Vue {
  private cards: Card[] = [];
  private player: Player<PlayerObj>[] = [];

  public mounted() {
    console.log('koko')
    ConcentrationService.start().then(item => {
      this.cards = item.data.deck.cards;
      this.player = item.data.player;
    });
  }

  // カードを選択
  public cardSelect(i: number) {
    let turnPlayer: Player<PlayerObj>;
    this.player.map(player => {
      if (player.isTurn) {
        turnPlayer = player;
        ConcentrationService.select(turnPlayer, i);
      }
    })
    this.cards[i].isOpen = true;
  }
}
</script>

<style scoped lang="scss">
.concentration {
  padding: 50px 100px;

  .card_space {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    .card {
      margin: 10px 0;
    }
  }
}
</style>
