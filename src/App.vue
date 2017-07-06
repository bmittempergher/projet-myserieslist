<template>
  <div id="app">
    <MenuPrincipal></MenuPrincipal>
    <router-view></router-view>
  </div>
</template>

<script>
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
      MenuPrincipal
    }
  };
</script>

<style src="vue-material/dist/vue-material.css"></style>
