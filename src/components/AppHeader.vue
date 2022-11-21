  <script>
  import {store} from '../data/store'
  export default {
  name: 'AppHeader',
  data() {
    return {
        store
      }
  },
  methods: {
    reset() {
      store.queryToSearch = "";
      store.titleToSearch = "";
      store.originalTitleToSearch = "";
      store.originalLenguageToSearch = "";
      store.voteAverageToSearch = "";
      this.$emit('startSearch');
    }
  }
  }
  </script>

<template>
  <header>
    <div class="container">
    <div class="logo">
      <img src="../assets/img/logo-boolflix.png" alt="Logo">
    </div>
    <div class="search">
        <input v-model="store.queryToSearch" type="text" placeholder="Search">
        <button @click="$emit('startSearch')" class="btn-search">Search</button>
        <button @click="reset()" class="btn-reset">Reset</button>
    </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  header {
    background-color: $secondary-color;
    height: 85px;
  }
  img {
    width: 135px;
    cursor: pointer;
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: $tertiary-color;
  }
  .search {
    display: flex;
    align-items: center;
  }
  input {
    padding: 6px 9px;
    border-radius: 5px;
    margin-right: 5px;

  }
  .btn-search {
    width: 125px;
    background-color: $tertiary-color;
    color: #FFFFFF;
    padding: 6px 9px;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: lighter;
    margin-right: 5px;
  }
  .btn-reset {
    width: 80px;
    background-color: grey;
    color: #FFFFFF;
    padding: 6px 9px;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: lighter;
  }
</style>