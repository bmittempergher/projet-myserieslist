<template>
    <md-toolbar class="md-medium">
        <div class="md-toolbar-container">                        
            <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
            <a href="/#/">
                <h2 class="md-title" style="flex: 1;">MySeriesList</h2>
            </a>
            <label>Rechercher : <input type="text" id="recherche" name="recherche" v-model="valeurRecherche" ></label>
            <a id="lien_recherche" v-bind:href="'/#/recherche/'+valeurRecherche">
                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
            </a>
        </div>
    </md-toolbar>
</template>

<script>
export default {
  data () {
    let valeurRecherche;
    return {
      valeurRecherche: valeurRecherche
    };
  },
  name: 'menuPrincipal'
};
</script>

<style>
</style>
