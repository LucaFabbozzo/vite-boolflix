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
      <div class="loadingio-spinner-ripple-fnkizz3p75b"><div class="ldio-ce2a9lmt6sd">
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
    margin: 200px auto;
    color: #ffffff;
    text-align: center;
  }
  
@keyframes ldio-ce2a9lmt6sd {
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
  }.ldio-ce2a9lmt6sd div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-ce2a9lmt6sd 1s cubic-bezier(0,0.2,0.8,1) infinite;
  }.ldio-ce2a9lmt6sd div:nth-child(1) {
    border-color: #e90c59;
    animation-delay: 0s;
  }
  .ldio-ce2a9lmt6sd div:nth-child(2) {
    border-color: #151616;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-ripple-fnkizz3p75b {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-ce2a9lmt6sd {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-ce2a9lmt6sd div { box-sizing: content-box; }

</style>



