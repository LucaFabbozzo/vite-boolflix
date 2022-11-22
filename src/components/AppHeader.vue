  <script>
  import {store} from '../data/store'
  export default {
  name: 'AppHeader',
  data() {
    return {
        store
      }
  },
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
  input, select {
    padding: 6px 9px;
    border-radius: 5px;
    margin-right: 5px;
  }
</style>