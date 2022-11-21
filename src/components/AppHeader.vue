  <script>
  export default {
    name: 'AppHeader'
  }
  </script>

<template>
  <header>
    <div class="container">
    <div class="logo">
      <h1>BOOLFLIX</h1>
    </div>
    <nav class="search">
      <input type="text">
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
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
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: $tertiary-color;
  }
</style>