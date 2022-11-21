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
      if (store.originalLenguageToSearch === 'it') {
        return 'fi fi-' + 'it';
      } else if (store.originalLenguageToSearch === 'en') {
        return 'fi fi-' + 'gb';
      }
    }
   }
}
  </script>

<template>
  <div class="container" v-for="movies in store.moviesListData" :key="movies.id">
    <h1>Titolo: {{movies.title}}</h1>
    <h2>Titolo Originale: {{movies.original_title}}</h2>
    <h3>Lingua: {{movies.original_language}} <span :class="changeFlag()"></span></h3>
    <h4>Rating: {{movies.vote_average}}</h4>
  </div>
</template>


<style lang="scss" scoped>
  li {
    color: rgb(42, 42, 42);
  }
</style>