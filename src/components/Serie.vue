<template>
    <div>
        <md-layout md-gutter>
            <md-layout v-for="(titre , index) in titres" v-bind:key="index" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
                <md-card style="max-width: 320px; display: inline-block; padding: 10px; margin: 16px;">
                    <md-card-header>
                        <div class="md-title" style="text-align: center;">{{titre}}</div>
                    </md-card-header>
                    <md-card-media>
                        <img v-bind:src="images[index]" style="width: inherit; margin: auto; display: block;">
                    </md-card-media>
                    <md-card-content>
                        {{synopsis[index]}}
                    </md-card-content>
                </md-card>
            </md-layout>
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
  name: 'serie'
};
</script>

<style>

</style>
