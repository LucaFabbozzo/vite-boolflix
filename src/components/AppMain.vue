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
  <main>
    <h1 class="container-cards">
      {{title}}
    </h1>

    <div v-if="store.isLoaded" class="container-cards"> 
      <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
    </div>
    <div class="loading" v-else >
      ...Loading
    </div>
  </main>
  
 
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  .container-cards {
    display: flex;
    flex-wrap: wrap;
  }
  h1{
    color: #ffffff;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
  .loading {
    width: 50%;
    margin: 0 auto;
    color: #ffffff;
  }

</style>