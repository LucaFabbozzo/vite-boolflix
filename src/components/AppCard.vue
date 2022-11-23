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
      <div class="center">
        <p class="title">{{ card.title || card.name }}</p>
        <p>{{card.original_title}}</p>
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
  p.title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
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



.card img {
    overflow: hidden;
}
.card img {
    transition: .5s;
}
.card:hover img {
    opacity: .5;
    transform: translateX(30%);/*100%*/
}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;/*100%*/
    height: 100%;
    background: #ffffff;
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
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-30%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #ff3636;
    line-height: 20px;
    font-size: 20px;
    text-transform: uppercase;
}
.card .details .center h1 span {
    font-size: 14px;
    color: #262626;
}
.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
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
    background: #262626;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
}
.card .details .center ul li a:hover {
    background: #ff3636;
}


  p {
    font-size: 0.5rem;
    margin-bottom: 2px;
    color: #ffffff;
    text-transform: capitalize;
  }
  i {
    font-size: 0.5rem;
  }
</style>



