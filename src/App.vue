<template>
  <div id="app">
    <router-view></router-view>
    <h2 style="margin-left: 25px;">Populaire en ce moment :</h2>
      <serie></serie>
  </div>
</template>

<script>
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
      Serie
    }
  };
</script>

<style src="vue-material/dist/vue-material.css"></style>
