  <script>
import { store } from '../data/store'
  import AppCard from './AppCard.vue';
  export default {
  name: 'AppMain',
  components: {AppCard},
  props: {
    title: String,
    type: String
  },
  data() {
    return {
      store
    }
  }
}
  </script>

<template>
  <h1 class="container-cards">
    {{title}}
  </h1>

  <div class="container-cards"> 
    <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
  </div>
 
</template>


<style lang="scss" scoped>
  .container-cards {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    color: rgb(42, 42, 42);
  }
</style>