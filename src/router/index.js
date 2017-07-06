import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import Serie from '@/components/Serie';
import SerieDetail from '@/components/SerieDetail';
import SerieRecherche from '@/components/SerieRecherche';

Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Serie',
      component: Serie
    },
    {
      path: '/detail/:id',
      name: 'SerieDetail',
      component: SerieDetail
    },
    {
      path: '/recherche/:recherche',
      name: 'SerieRecherche',
      component: SerieRecherche
    }
  ]
});
