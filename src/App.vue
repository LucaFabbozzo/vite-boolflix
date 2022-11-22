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
    getApi(type) {
      axios.get(store.apiUrl + type, { params: store.apiParams })
        .then(response => {
          store[type] = response.data.results
          // console.log(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, 
  startSearch() {
    this.getApi('movie')
    this.getApi('tv')
  },
  mounted() {
    this.startSearch();
  }
}

  </script>

<template>
    <AppHeader @startSearch="startSearch"/>
    <main>
      <AppMain title="Film" type="movie"/>
      <AppMain title="Serie Tv" type="tv"/>
      <AppCard />
    </main>
</template>


<style lang="scss">
@use './styles/general.scss' 

</style>