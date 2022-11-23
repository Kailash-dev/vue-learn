<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="numbersquare">
      {{ $store.state.counter }}
      <sup> 2 </sup> = {{$store.getters.counterSquare}}
    </div>
    <div class="button">
      <button @click="$store.dispatch('increment')">+</button>
      <button @click="$store.dispatch('decrement')">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },

})
export default class HomeView extends Vue { }
</script>
<style>
div {k
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.button {
  font-size: 40px;
  margin: 0 10px;
  width: 100px;
}
</style>