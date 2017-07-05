<template>
    <div>
        <md-layout v-for="(titre , index) in titres" v-bind:key="index" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
            <md-card>
                <md-card-header>
                    <div class="md-title">{{titre}}</div>
                </md-card-header>
                <md-card-media>
                    <img v-bind:src="images[index]" style="width: 200px; height: 200px;">
                </md-card-media>
                <md-card-content>
                    {{synopsis[index]}}
                </md-card-content>
            </md-card>
        </md-layout>
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
  },
  props: ['serie', 'ind'],
  filters: {
    toImage (serie) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png';
    }
  },
  name: 'serie'
};
</script>

<style>

</style>
