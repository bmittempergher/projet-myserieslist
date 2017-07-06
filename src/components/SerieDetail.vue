<template>
    <div>
      <div class="cover">
        <md-layout md-gutter>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100">
            <h1>{{serie.titre}}</h1>
          </md-layout>
        </md-layout>
      </div>
      <div class="infos">
        <md-layout row>
          <p>{{serie.synopsis}}</p>
        </md-layout>
        <md-layout row>          
          <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              <h2>Note : {{serie.note}}</h2>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
            <h2>Genre</h2>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
            <h2>Date de sortie</h2>
          </md-layout>
        </md-layout>       
      </div>
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
        serie.image = 'http://image.tmdb.org/t/p/original' + response.data.backdrop_path;
        serie.synopsis = response.data.overview;
        serie.note = response.data.vote_average / 2;
        serie.titre = response.data.name;

        this.serie = serie;
        document.documentElement.style.setProperty('--img', 'url("' + serie.image + '"');
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
:root{
  --img: '';
}

.cover{
  background-image: var(--img);
  min-height: 600px;
  background-size: cover;
  color: white;
  background-color: black;
}

.cover h1{
  margin-top:0;
  padding-top:50px;
  font-family: fantasy;
  font-size:3.5em;
}

.cover p{
  margin-top:400px;
}

.content-grid {
  max-width: 960px;
}
</style>
