<template>
  <div id="nav">
    <div class="game_item">
      <router-link to="/concentration">神経衰弱</router-link>
    </div>
    <div class="game_item">
      <router-link to="/high-low">HighAndLow</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {}
})
export default class Game extends Vue {}
</script>

<style scoped lang="scss">
#nav {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  .game_item {
    line-height: 88px;

    &:hover {
      background-color: #42b983;
      cursor: pointer;

      a {
        color: #fff;
      }
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
