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
    getApi(type, isTrending = false) {
      store.isLoaded = false
      let apiUrl;
      if (isTrending) apiUrl = "https://api.themoviedb.org/3/trending/all/day"
      else apiUrl = store.apiUrl + type
      axios.get(apiUrl, { params: store.apiParams })
        .then(response => {
          store[type] = response.data.results
          console.log(store[type])
          store.isLoaded = true;
        })
        .catch(error => {
          console.log(error);
        })
    },
    startSearch() {
      store.movie = [];
      store.tv = [];
    if (store.type === '') {
      this.getApi('movie')
      this.getApi('tv')
    } else {
      this.getApi(store.type)
    }
  }, 

  },
  mounted() {
    this.getApi('movie', true);
  }
}

  </script>

<template>
    <AppHeader @search="startSearch"/>
    <main>
      <AppMain v-if="store.movie.length > 0" title="Film" type="movie"/>
      <AppMain v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>
    </main>
</template>


<style lang="scss">
@use './styles/general.scss' 

</style>