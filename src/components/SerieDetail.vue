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
        <md-layout md-flex-xsmall="100" md-flex-small="50">
          <h2>Nombre de saisons : {{serie.nbSaisons}}</h2>
        </md-layout>  
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
          <h2>Nombre d'épisodes : {{serie.nbEpisodes}}</h2>
        </md-layout>
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
          <h2>Etat : {{serie.etat}} </h2>
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    let serie = {};
    if (typeof (localStorage.getItem(this.$route.params.id)) !== 'undefined' && localStorage.getItem(this.$route.params.id) !== null) {
      serie = JSON.parse(localStorage.getItem(this.$route.params.id));
      document.documentElement.style.setProperty('--img', 'url("' + serie.imageFond + '"');
    } else {
      axios.get(`https://amc.ig.he-arc.ch/tmdb/tv/${this.$route.params.id}?language=fr-CH`)
        .then((response) => {
          serie.id = response.data.id;
          serie.image = 'http://image.tmdb.org/t/p/w185' + response.data.poster_path;
          serie.imageFond = 'http://image.tmdb.org/t/p/original' + response.data.backdrop_path;
          serie.synopsis = response.data.overview;
          serie.note = response.data.vote_average / 2;
          serie.titre = response.data.name;
          serie.nbSaisons = response.data.number_of_seasons;
          serie.nbEpisodes = response.data.number_of_episodes;

          if (typeof (response.data.in_production) === 'undefined' || response.data.in_production === null) {
            serie.etat = 'Inconnu';
          } else if (response.data.in_production === true) {
            serie.etat = 'En cours';
          } else {
            serie.etat = 'Terminée';
          };

          document.documentElement.style.setProperty('--img', 'url("' + serie.imageFond + '"');
          this.serie = serie;
        })
        .catch(error => {
          console.log(error);
        });
    }

    return {
      serie: []
    };
  }
};
</script>

<style>
:root {
  --img: '';
}

.cover {
  background-image: var(--img);
  min-height: 600px;
  background-size: cover;
  color: white;
  background-color: black;
}

.cover h1 {
  margin-top: 0;
  padding-top: 50px;
  font-family: fantasy;
  font-size: 3.5em;
}

.cover p {
  margin-top: 400px;
}

.content-grid {
  max-width: 960px;
}
</style>
