  <script>
  export default {
    name: 'AppHeader'
  }
  </script>

<template>
  <header>
    <div class="container">
    <div class="logo">
      <img src="../assets/img/logo-boolflix.png" alt="Logo">
    </div>
    <nav class="search">
      <input type="text" placeholder="Search">
      <button class="btn-search">Search</button>
    </nav>
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
    widows: 125px;
    background-color: $tertiary-color;
    color: #FFFFFF;
    padding: 6px 9px;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: lighter;
  }
</style>