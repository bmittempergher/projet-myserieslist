<template>
    <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
        <md-card>
            <md-card-header>
                <div class="md-title">Breaking Bad</div>
            </md-card-header>
            <md-card-media>
                <img v-bind:src="serie | toImage" style="width: 200px; height: 200px;">
            </md-card-media>
            <md-card-content>
                LOREM IPSUM
            </md-card-content>
        </md-card>
    </md-layout>
</template>

<script>
export default {
  props: ['serie', 'ind'],
  filters: {
    toImage (serie) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png';
    }
  },
  name: 'serie'
};
</script>

<style>

</style>
