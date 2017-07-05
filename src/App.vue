<template>
  <div id="app">
    <menu></menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  export default {
    name: 'app',
    components: {
      Menu
    }
  }
</script>

<style src="vue-material/dist/vue-material.css"></style>
