<template>
    <div>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    let lien = 'http://image.tmdb.org/t/p/w185';
    axios.get(`https://amc.ig.he-arc.ch/tmdb/tv/$($route.params.id)?language=fr-CH`)
      .then((response) => {
        let ListeIds = response.data.results.map(item => item.id);
        let ListeTitres = response.data.results.map(item => item.original_name);
        let ListeImages = response.data.results.map(item => lien + item.poster_path);
        let ListeSynopsis = response.data.results.map(item => item.overview.substr(0, 250) + ' ...');
        let ListeNotes = response.data.results.map(item => item.vote_average / 2);
        let listeSeries = [];
        ListeImages.forEach((image, index) => {
          listeSeries.push({
            id: ListeIds[index],
            image: ListeImages[index],
            titre: ListeTitres[index],
            synopsis: ListeSynopsis[index],
            note: ListeNotes[index]
          });
        });
        // ici normand enelver
        console.log(listeSeries);
        this.listeSeries = listeSeries;
      })
      .catch(error => {
        console.log(error);
      });

    return {
      results: []
    };
  }
};
</script>

<style>
  
</style>
