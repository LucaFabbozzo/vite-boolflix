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
  <main v-if="store.isLoaded">
    <h1 class="container-cards">
      {{title}}
    </h1>

    <div v-if="store.isLoaded" class="container-cards"> 
      <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
    </div>
    <div class="loading" v-else >
      <div class="loadingio-spinner-ripple-gzy0tnl9e64">
      <div class="ldio-1jh1p2axrkh">
      <div></div><div></div>
      </div></div>
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
  }

  // loader

@keyframes ldio-1jh1p2axrkh {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
  }.ldio-1jh1p2axrkh div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-1jh1p2axrkh 1s cubic-bezier(0,0.2,0.8,1) infinite;
  }.ldio-1jh1p2axrkh div:nth-child(1) {
    border-color: $tertiary-color;
    animation-delay: 0s;
  }
  .ldio-1jh1p2axrkh div:nth-child(2) {
    border-color: $secondary-color;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-ripple-gzy0tnl9e64 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-1jh1p2axrkh {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-1jh1p2axrkh div { box-sizing: content-box; }

</style>