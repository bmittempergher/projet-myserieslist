import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import Serie from '@/components/Serie';

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
      path: '/',
      name: 'SerieDetail',
      component: Serie
    },
    {
      path: '/',
      name: 'recherche/:recherche',
      component: Serie
    }
  ]
});
