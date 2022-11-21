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
  mounted() {
    axios.get(store.apiUrl)
      .then(result => {
        console.log(result.data.results)
      })
      .catch(error => {
      console.log(error)
    })
  }
}

  </script>

<template>
    <AppHeader />
    <main>
      <AppMain />
      <AppCard />
    </main>
</template>


<style lang="scss">
@use './styles/general.scss' 

</style>