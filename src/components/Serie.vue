<template>
    <div>
        <md-layout v-for="(serie , index) in listeSeries" v-bind:key="serie" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
            <md-card>
                <md-card-header>
                    <div class="md-title">{{serie.titre}}</div>
                </md-card-header>
                <md-card-media>
                    <img v-bind:src="serie.image" style="width: 200px; height: 200px;">
                </md-card-media>
                <md-card-content>
                    {{serie.synopsis}}
                </md-card-content>
            </md-card>
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
      let ListeSynopsis = response.data.results.map(item => item.overview);
      let listeSeries = [];
      ListeImages.forEach((image, index) => {
        listeSeries.push({
          image: ListeImages[index],
          titre: ListeTitres[index],
          synopsis: ListeSynopsis[index]
        });
      });
      // ici normand a enlever
      console.log(listeSeries);
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
