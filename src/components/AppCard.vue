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
    <img v-if="card.poster_path === null" src="../assets/img/no-cover.png">
    <img v-else :src="'https://image.tmdb.org/t/p/w342' + card.poster_path">
    <div class="details">
      <div class="center force">
        <p class="title">{{ card.title || card.name }}</p>
        <p v-if="card.original_title != card.title || card.name" class="original"><span class="small">Titolo Originale: </span>{{card.original_title}}</p>
        <p class="overview">{{card.overview}}</p>
        <i v-for="(item, index) in 5"
        :key="index"
        class="fa-star"
        :class="index < Math.ceil(card.vote_average / 2) ? 'fas' : 'far'"></i>
         <p>Rating: {{Math.ceil(card.vote_average / 2)}}</p>
        <span v-if="card.original_language === 'en'" :class="'fi fi-' + 'gb'"></span>
        <span v-if="card.original_language === 'uk'" :class="'fi fi-' + 'gb'"></span>
        <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
        <span v-else class="fi fi-xx"></span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  .card {
    width: 180px;
    height: 270px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
    color: #b5b5b5;
  }

  .original {
    text-transform: uppercase;
    .small {
      text-transform: capitalize;
    }
  }

  p.overview {
    font-weight: lighter;
    font-size: 0.6rem;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  // flip-card
.card img {
    overflow: hidden;
}
.card img {
    transition: .5s;
}
.card:hover img {
    opacity: .5;
    transform: translateX(10%);/*100%*/
}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;/*100%*/
    height: 100%;
     background-image: 
    linear-gradient(
      lighten($primary-color, 5%),
      lighten($primary-color, 20%)
      );
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
    overflow: auto;
}

.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 5px;
    position: absolute;
    top: 50%;
    transform: translateY(-20%);
}

.card .details .center h1 span {
    font-size: 14px;
    color: #ffffff;
}
.card .details .center p {
    margin: 10px 0;
    padding: 0;
    // color: #ffffff;
}
.card .details .center ul {
    margin: 10px auto 0;
    padding: 0;
    display: table;
}
.card .details .center ul li {
    list-style: none;
    margin: 0 5px;
    float: left;
}
.card .details .center ul li a {
    display: block;
    background: #ffffff;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
}

// end flip card code


  p {
    font-size: 0.5rem;
    margin-bottom: 2px;
    text-transform: capitalize;
    color: #ffffff;
  }
  i {
    font-size: 0.5rem;
    color: #ffffff;
  }

</style>

