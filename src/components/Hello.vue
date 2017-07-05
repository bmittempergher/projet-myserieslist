<template>
  <div>
    <div v-for="(titre , index) in titres" v-bind:key="index">        
        <h1>
          {{titre}}          
        </h1>
        <img v-bind:src="images[index]">
        <p>{{synopsis[index]}}</p>   
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    let lien = 'http://image.tmdb.org/t/p/w185/';
    axios.get(`https://amc.ig.he-arc.ch/tmdb/tv/popular?language=fr-CH`)
    .then((response) => {
      this.images = response.data.results.map(item => lien + item.poster_path);
      this.titres = response.data.results.map(item => item.original_name);
      this.synopsis = response.data.results.map(item => item.overview);
    })
    .catch(error => {
      console.log(error);
    });

    return {
      images: [],
      titres: []
    };
  }
};
</script>

<style>
  
</style>
