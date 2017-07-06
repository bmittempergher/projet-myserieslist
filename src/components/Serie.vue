<template>
  <div>
    <md-layout md-gutter>
      <md-layout v-for="(serie , index) in listeSeries" v-bind:key="serie" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
        <md-card style="max-width: 400px; display: inline-block; padding: 10px; margin: 16px;">
            <md-card-header>
                <div class="md-title" style="text-align: center;">{{serie.titre}}</div>
            </md-card-header>
            <md-card-media>
                <img v-bind:src="serie.image" style="width: inherit; margin: auto; display: block;">
            </md-card-media>
            <md-card-content>
                {{serie.synopsis}}
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
    let lien = 'http://image.tmdb.org/t/p/w185';
    axios.get(`https://amc.ig.he-arc.ch/tmdb/tv/popular?language=fr-CH`)
    .then((response) => {
      let ListeImages = response.data.results.map(item => lien + item.poster_path);
      let ListeTitres = response.data.results.map(item => item.original_name);
      let ListeSynopsis = response.data.results.map(item => item.overview.substr(0, 250) + ' ...');
      let listeSeries = [];
      ListeImages.forEach((image, index) => {
        listeSeries.push({
          image: ListeImages[index],
          titre: ListeTitres[index],
          synopsis: ListeSynopsis[index]
        });
      });
      this.listeSeries = listeSeries;
    })
    .catch(error => {
      console.log(error);
    });

    return {
      listeSeries: []
    };
  },
  props: ['serie'],
  name: 'serie'
};
</script>

<style>

</style>
