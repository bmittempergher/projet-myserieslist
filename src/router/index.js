import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import MenuPrincipal from '@/components/Menu';
import Serie from '@/components/Serie';

Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuPrincipal',
      component: MenuPrincipal
    },
    {
      path: '/',
      name: 'Serie',
      component: Serie
    },
    {
      path: '/',
      name: 'SerieDetail',
      component: Serie
    }
  ]
});
