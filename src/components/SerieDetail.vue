<template>
    <div>
        <h1>{{serie.titre}}</h1>
        <img :src="serie.image">
        <h2>Note : {{serie.note}}</h2>
        <p>{{serie.synopsis}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    axios.get(`https://amc.ig.he-arc.ch/tmdb/tv/${this.$route.params.id}?language=fr-CH`)
      .then((response) => {
        let serie = {};
        serie.id = response.data.id;
        serie.image = 'http://image.tmdb.org/t/p/w185' + response.data.poster_path;
        serie.synopsis = response.data.overview;
        serie.note = response.data.vote_average / 2;
        serie.titre = response.data.name;

        this.serie = serie;
      })
      .catch(error => {
        console.log(error);
      });

    return {
      serie: {}
    };
  }
};
</script>

<style>
  
</style>
