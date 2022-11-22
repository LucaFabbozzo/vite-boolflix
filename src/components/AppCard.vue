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
    <div class="overlay">
      <div class="text">
        <p>{{ card.title || card.name }}</p>
        <p>{{card.original_title}}</p>
        <p>Language: {{card.original_language}}</p>
        <i v-for="(item, index) in 5"
        :key="index"
        class="fa-star"
        :class="index < Math.ceil(card.vote_average / 2) ? 'fas' : 'far'"></i>
        <p>Rating: {{Math.ceil(card.vote_average / 2)}}</p>
        <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
        <span v-else class="fi fi-xx"></span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .card {
    width: 150px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

 .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .6s ease;
  background-color: #3f3f3f;
}

.card:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

  p {
    font-size: 0.7rem;
    margin-bottom: 10px;
    color: #ffffff;
    text-transform: capitalize;
  }
  i {
    font-size: 0.5rem;
  }
</style>





