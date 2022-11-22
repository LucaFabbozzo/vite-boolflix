  <script>
export default {
  name: 'AppCard',
  props: {
    card: Object,
  },

}
  </script>

<template>
  <div class="card"> 
  <img :src="'https://image.tmdb.org/t/p/w342' + card.poster_path">
  <p>{{ card.title || card.name }}</p>
  <p>{{card.original_name}}</p>
  <p>{{card.original_language}}</p>
  <p>{{card.vote_average}}</p>
  <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
  <span v-else class="fi fi-xx"></span>
  </div>
</template>


<style lang="scss" scoped>
  .card {
    width: 150px;
    border: 1px solid grey;
    padding: 8px 10px;
    margin: 0 auto;
  }
  p {
    font-size: 0.8rem;
  }
</style>



<!-- <p v-for="(x, index) in Math.ceil(el.vote_average / 2)" :key="index">
                        <i class="fa-solid fa-star"></i>
                    </p> -->


  <!-- <div class="container-cards" v-for="movies in store.moviesListData" :key="movies.id">
    <div class="card">
      <p v-if="movies.title">Titolo: {{movies.title}}</p>
      <p v-else>Titolo: {{movies.name}}</p>
      <p v-if="movies.original_title">Titolo Originale: {{movies.original_title}}</p>
      <p v-else>{{movies.original_name}}</p>
      <span v-if="movies.original_language" :class="'fi fi-' + movies.original_language"></span>
      <span v-else class="fi fi-xx"></span>
      <p>Rating: {{movies.vote_average}}</p>
    </div>
  </div> -->