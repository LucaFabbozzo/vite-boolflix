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
  <h1 class="container-card">
    {{title}}
  </h1>

  <div class="container-card"> 
    <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
  </div>
 
  <!-- <div class="container-cards" v-for="movies in store.moviesListData" :key="movies.id">
    <div class="card">
      <p v-if="movies.title">Titolo: {{movies.title}}</p>
      <p v-else>Titolo: {{movies.name}}</p>
      <p v-if="movies.original_title">Titolo Originale: {{movies.original_title}}</p>
      <p v-else>{{movies.original_name}}</p>
      <span v-if="movies.original_language" :class="'fi fi-' + movies.original_language"></span>
      <span v-else class="fi fi-xx"></span>
      <p>Rating: {{movies.vote_average}}</p>
    </div>
  </div> -->
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