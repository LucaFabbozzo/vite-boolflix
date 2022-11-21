  <script>
  import {store} from '../data/store'
  export default {
  name: 'AppMain',
  data() {
    return {
      store
    }
  },
  methods: {  
    changeFlag() {
      if (store.originalLenguageToSearch = 'en') {
        return 'fi fi-' + 'gb';
      } else if (store.originalLenguageToSearch == 'it') {
        return 'fi fi-' + 'it';
      } else {
        return 'fi fi-' + '';
      }
    }
   }
}
  </script>

<template>
  <div class="container" v-for="movies in store.moviesListData" :key="movies.id">
    <h1 v-if="movies.title">Titolo: {{movies.title}}</h1>
    <h1 v-else>Titolo: {{movies.name}}</h1>
    <h2 v-if="movies.original_title">Titolo Originale: {{movies.original_title}}</h2>
    <h2 v-else>{{movies.original_name}}</h2>
    <h3>Lingua: {{movies.original_language}} <span :class="changeFlag()"></span></h3>
    <h4>Rating: {{movies.vote_average}}</h4>
  </div>
</template>


<style lang="scss" scoped>
  li {
    color: rgb(42, 42, 42);
  }
</style>