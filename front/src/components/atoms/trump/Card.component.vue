<template>
  <div class="card">
    <div class="info">
      <span class="mark" v-if="card.suit">{{ mark }}</span>
      <span class="rank" v-if="card.rank !== 0">{{ card.rank }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { Card } from "../../../../../server/src/card";

@Options({
  components: {}
})
export default class CardCompornent extends Vue {
  private mark!: string;

  @Prop()
  private card!: Card;

  public beforeUpdate() {
    if (this.card.suit === "heart") this.mark = "♡";
    if (this.card.suit === "spade") this.mark = "♤";
    if (this.card.suit === "diamond") this.mark = "♢";
    if (this.card.suit === "club") this.mark = "♧";
    if (this.card.suit === "joker") this.mark = "👵";
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 50px;
  height: 75px;
  border: solid 1px #000;
  cursor: pointer;

  .info {
    line-height: 75px;
  }
}
</style>
