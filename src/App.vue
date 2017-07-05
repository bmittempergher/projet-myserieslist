<template>
  <div id="app">
    <router-view></router-view>
    <h2>Prochaine sortie</h2>
    <md-layout md-gutter>
      <serie></serie>
    </md-layout>
  </div>
</template>

<script>
  import Menu from './components/Menu';
  import Serie from './components/Serie';
  export default {
    name: 'app',
    data () {
      let objetList;

      return {
        objetList: objetList
      };
    },
    components: {
      Serie,
      Menu
    }
  };
</script>

<style src="vue-material/dist/vue-material.css"></style>
