  <script>
import {store} from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: { AppHeader, AppMain, AppCard },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get(store.apiUrl, {
        params: {
          query: store.queryToSearch,
          title: store.titleToSearch,
          original_title: store.originalTitleToSearch,
          original_language: store.originalLenguageToSearch,
          vote_average: store.voteAverageToSearch
        }
       })
      .then(result => {
        store.moviesListData = result.data.results
        console.log(store.moviesListData)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getMovies()
  }

}

  </script>

<template>
    <AppHeader @startSearch="getMovies()"/>
    <main>
      <AppMain />
      <AppCard />
    </main>
</template>


<style lang="scss">
@use './styles/general.scss' 

</style>