<template>
    <md-toolbar class="md-medium">
        <a href="/#/">
            <h1 class="md-title">MySeriesList</h1>
        </a>
        <label class="label-recherche">Rechercher : <input type="text" id="recherche" name="recherche" v-model="valeurRecherche" ></label>
        <a v-bind:href="'/#/recherche/'+valeurRecherche">
            <md-button class="md-icon-button">
                <md-icon class="icon-recherche">search</md-icon>
            </md-button>
        </a>
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
body {
    background-color: #CFD8DC;
}

h1.md-title {
    flex: 1;
    font-family: fantasy;
}

label {
    margin-left: auto;
    padding-top: 5px;
    font-family: fantasy;
}

md-icon.icon-recherche {
    padding-top: 2px;
}

.label-recherche {
    font-size: 1.3em;
}
</style>
