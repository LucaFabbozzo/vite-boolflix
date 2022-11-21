  <script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
  export default {
  name: 'App',
  components: {AppHeader, AppMain, AppCard}
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