<template>
    <div>
        <md-layout v-for="(titre , index) in titres" v-bind:key="index" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" md-flex-large="33">
            <md-card>
                <md-card-header>
                    <div class="md-title">{{titre}}</div>
                </md-card-header>
                <md-card-media>
                    <img v-bind:src="images[index]" style="width: 200px; height: 200px;">
                </md-card-media>
                <md-card-content>
                    {{synopsis[index]}}
                </md-card-content>
            </md-card>
        </md-layout>
    </div>
</template>

<script>
export default {
};
</script>

<style>
  
</style>
