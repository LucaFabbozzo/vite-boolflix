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
      store.apiParams.query = '';
      store.type = '';
      window.location.reload();
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
        <input @keyup.enter="$emit('search')" v-model.trim="store.apiParams.query" type="text" placeholder="Cerca un film">
        <select v-model="store.type" class="select">
          <option value="">All</option>
          <option value="movie">Film</option>
          <option value="tv">Serie Tv</option>
        </select>
        <button @click="reset()"><i class="fa-solid fa-rotate-right"></i></button>
    </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/vars' as *;
  header {
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
  input, select, button {
    padding: 10px 14px;
    border-radius: 2px;
    margin-right: 5px;
    border: none;
    background-color: #ffffff;
  }

  select {
    background-color: $tertiary-color;
    color: #ffffff;
    cursor: pointer; 
  }
 

</style>