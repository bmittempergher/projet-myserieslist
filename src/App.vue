<template>
  <div id="app">
    <MenuPrincipal></MenuPrincipal>
    <router-view></router-view>
    <h2 style="margin-left: 25px;">Populaire en ce moment :</h2>
      <serie></serie>
  </div>
</template>

<script>
  import Serie from './components/Serie';
  import MenuPrincipal from '@/components/Menu';
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
      MenuPrincipal
    }
  };
</script>

<style src="vue-material/dist/vue-material.css"></style>
